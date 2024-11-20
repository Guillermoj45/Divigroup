import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {IonContent, IonImg, IonRouterLink, IonSearchbar,} from '@ionic/angular/standalone';
import {TajetaCuentaComponent} from "../../tarjetas/tajeta-cuenta/tajeta-cuenta.component";
import {MenuTajetaCuentaComponent} from "../../tarjetas/menu-tajeta-cuenta/menu-tajeta-cuenta.component";
import {addIcons} from "ionicons";
import {addOutline, document} from "ionicons/icons";

import {BotonAgregarComponent} from "../../componentes/boton-agregar/boton-agregar.component";
import {FooterComponent} from "../../componentes/footer/footer.component";
import {NavarComponent} from "../../componentes/navar/navar.component";
import {CuentaService} from "../../service/cuenta.service";
import {Cuenta} from "../../modelos/Cuenta";
import {Producto} from "../../modelos/Producto";
import {NgForOf} from "@angular/common";
import {UsuarioService} from "../../service/usuario.service";
import {Router} from "@angular/router";
import {TarjetaAmigosComponent} from "../../tarjetas/tarjeta-amigos/tarjeta-amigos.component";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [

        TajetaCuentaComponent,
        MenuTajetaCuentaComponent,
        FooterComponent,
        IonSearchbar,
        IonContent,
        NavarComponent,
        BotonAgregarComponent,
        IonImg,
        NgForOf,
        IonRouterLink,
    ],
})


export class HomePage implements OnInit {
    @ViewChildren(TajetaCuentaComponent) tajetaCuentaComponents!: QueryList<TajetaCuentaComponent>;
    todasCuentas: Cuenta[] = [];
    cuentas: Cuenta[] = [];

    ngOnInit() {

    }

    ionViewWillEnter() {
        this.cuentaService.getObtenerCuentas().subscribe((cuentas: Cuenta[]) => {
            this.todasCuentas = cuentas;

            this.cuentas = cuentas;
            this.sacarUsuarios();
            this.calcularSaldo();
            this.tajetaCuentaComponents.forEach(tajetaCuentaComponent => {tajetaCuentaComponent.ngOnInit()});
        });
        console.log("Cuentas hola");
    }

    constructor(private cuentaService: CuentaService, private usuarioService: UsuarioService, private router : Router) {
        addIcons({'add-outline': addOutline, 'document': document});
    }

    sacarUsuarios() {
        for (let cuenta of this.cuentas) {
            this.usuarioService.introducirUsuariosCuenta(cuenta);
        }
    }

    calcularSaldo() {
        for (let cuenta of this.cuentas) {
            cuenta.saldo = 0;
            this.cuentaService.getObtenerGastos(cuenta).subscribe((gastos: Producto[]) => {
                cuenta.productos = gastos;
                gastos.forEach(gasto => {
                    cuenta.saldo += gasto.precio ? gasto.precio : 0;
                    cuenta.saldo = Number.parseFloat(cuenta.saldo.toFixed(2));
                })
            });
        }
    }


    handleInput(event: any) {
        console.log(event)
        if (event.target.value === '') {
            this.cuentas = this.todasCuentas;
            return;
        }
        const query = event.target.value.toLowerCase();
        this.cuentas = this.todasCuentas.filter((d: Cuenta) => d.nombre.toLowerCase().indexOf(query) > -1);
    }

    crearCuenta(){
        this.router.navigate(['/cuentas/crear']).then(r => console.log(r));
    }
}
