import {Component, OnInit} from '@angular/core';
import {IonContent, IonImg, IonSearchbar,} from '@ionic/angular/standalone';
import {TajetaCuentaComponent} from "../../tarjetas/tajeta-cuenta/tajeta-cuenta.component";
import {MenuTajetaCuentaComponent} from "../../tarjetas/menu-tajeta-cuenta/menu-tajeta-cuenta.component";
import {addIcons} from "ionicons";
import {addOutline, document} from "ionicons/icons";

import {BotonAgregarComponent} from "../../componentes/boton-agregar/boton-agregar.component";
import {RouterLink} from "@angular/router";
import {FooterComponent} from "../../componentes/footer/footer.component";
import {NavarComponent} from "../../componentes/navar/navar.component";
import {CuentaService} from "../../service/cuenta.service";
import {Cuenta} from "../../modelos/Cuenta";
import {Producto} from "../../modelos/Producto";
import {NgForOf} from "@angular/common";
import {UsuarioService} from "../../service/usuario.service";

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
        RouterLink,
        IonImg,
        NgForOf,
    ],
})


export class HomePage implements OnInit {

    todasCuentas: Cuenta[] = [];
    cuentas: Cuenta[] = [];

    ngOnInit() {
        this.cuentaService.getObtenerCuentas().subscribe((cuentas: Cuenta[]) => {
            this.todasCuentas = cuentas;

            this.cuentas = cuentas;
            this.sacarUsuarios();
            this.calcularSaldo();
        });

    }
    constructor(private cuentaService: CuentaService, private usuarioService: UsuarioService) {
        addIcons({'add-outline': addOutline, 'document': document});
    }

    sacarUsuarios() {
        for (let cuenta of this.cuentas){
            this.usuarioService.introducirUsuariosCuenta(cuenta);
        }
    }

    calcularSaldo() {
        for (let cuenta of this.cuentas) {
            cuenta.saldo = 0;
            this.cuentaService.getObtenerGastos(cuenta).subscribe((gastos: Producto[]) => {
                gastos.forEach(gasto => {
                    cuenta.saldo += gasto.precio? gasto.precio : 0;
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
    this.cuentas = this.todasCuentas.filter((d:Cuenta) => d.nombre.toLowerCase().indexOf(query) > -1);
  }
}
