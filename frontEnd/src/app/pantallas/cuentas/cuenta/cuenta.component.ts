import {Component, NgIterable, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {Cuenta} from "../../../modelos/Cuenta";
import {NgForOf, NgIf} from "@angular/common";
import {TajetaCuentaComponent} from "../../../tarjetas/tajeta-cuenta/tajeta-cuenta.component";
import {AmigoComponent} from "../../amigo/amigo.component";
import {MenuTarjetaAmigosComponent} from "../../../tarjetas/menu-tarjeta-amigos/menu-tarjeta-amigos.component";
import {TarjetaAmigosComponent} from "../../../tarjetas/tarjeta-amigos/tarjeta-amigos.component";
import {Producto} from "../../../modelos/Producto";
import {ProductoComponent} from "../../../tarjetas/producto/producto.component";
import {BotonAgregarComponent} from "../../../componentes/boton-agregar/boton-agregar.component";
import {Router, RouterLink} from "@angular/router";
import {FooterComponent} from "../../../componentes/footer/footer.component";
import {CuentaService} from "../../../service/cuenta.service";
import {addIcons} from "ionicons";
import {personOutline} from "ionicons/icons";

@Component({
    selector: 'app-cuenta',
    templateUrl: './cuenta.component.html',
    styleUrls: ['./cuenta.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        FormsModule,
        NgIf,
        TajetaCuentaComponent,
        AmigoComponent,
        MenuTarjetaAmigosComponent,
        TarjetaAmigosComponent,
        NgForOf,
        ProductoComponent,
        FooterComponent,
        BotonAgregarComponent,
        RouterLink
    ]
})
export class CuentaComponent implements OnInit {
    protected cuenta: Cuenta;
    segmento: string = 'cuentas';


    constructor(private cuentaService: CuentaService, private router:Router) {
        const navigation = this.router.getCurrentNavigation();
        this.cuenta = navigation?.extras.state?.['cuenta'];

    }

    ngOnInit() {
         this.cuentaService.getObtenerGastos(this.cuenta).subscribe((productos: Producto[]) => {
            this.cuenta.productos = productos;
            this.getPorPersona()
             Cuenta.cuentaSaldo(this.cuenta);
             this.puestaComun();
            console.log(this.cuenta)
         });
        addIcons({ personOutline });
    }

    onSegmentChange(event: any) {
        this.segmento = event.detail.value;
    }

    getTotal() {
        return this.cuenta.saldo;
    }

    getPorPersona() {
        let total: number = this.getTotal();
        let personas: number = this.cuenta.personas?.length || 1;
        this.cuenta.porPersona = (total / personas).toFixed(2);
    }

    puestaComun(){
        this.cuentaService.getPuestaComun(this.cuenta.id??0).subscribe((cuenta) => {
            for (let persona of this.cuenta.personas){
                persona.deuda = cuenta[persona.username];
            }
        });
        console.log("Puesta en comun ejecutada")
    }
    agregarProducto(){
        this.router.navigate(['/producto/crear'], {state: {cuenta: this.cuenta}});
    }

}

