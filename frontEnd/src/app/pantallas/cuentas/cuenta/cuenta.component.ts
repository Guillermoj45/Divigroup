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
import {RouterLink} from "@angular/router";
import {FooterComponent} from "../../../componentes/footer/footer.component";
import {CuentaService} from "../../../service/cuenta.service";

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
    nombre: string = 'Nombre de cuenta';
    imagen: string = 'https://picsum.photos/500/500?random=4';
    cuentas: Cuenta[] = [];
    segmento: string = 'cuentas';
    productos: NgIterable<Producto> | undefined | null;


    constructor(private cuentaService: CuentaService) {

    }

    ngOnInit() {
//    this.cuentaService.getObtenerGastos().subscribe((cuentas: Cuenta[]) => {
//      this.cuentas = cuentas;
//      console.log(this.cuentas);
//    });
    }

    onSegmentChange(event: any) {
        this.segmento = event.detail.value;
    }

    getTotal() {
        let total: number = 0;
        if (this.productos === null || this.productos === undefined) {
            return total;
        }
        for (let producto of this.productos) {
            if (producto.precio !== null) {
                total += producto.precio;
            }
        }
        return total;
    }

    getPorPersona() {
        let total: number = this.getTotal();
        let personas: number = this.cuentas.length;
        return total / personas;
    }

}

