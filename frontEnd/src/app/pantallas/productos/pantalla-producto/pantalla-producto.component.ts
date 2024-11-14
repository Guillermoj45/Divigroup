import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgForOf, NgIf} from "@angular/common";
import {ProductoComponent} from "../../../tarjetas/producto/producto.component";
import {RouterLink} from "@angular/router";
import {FooterComponent} from "../../../componentes/footer/footer.component";
import {TarjetaAmigosComponent} from "../../../tarjetas/tarjeta-amigos/tarjeta-amigos.component";
import {BotonAgregarComponent} from "../../../componentes/boton-agregar/boton-agregar.component";
import {addIcons} from "ionicons";
import {closeSharp, createSharp} from "ionicons/icons";

@Component({
    selector: 'app-pantalla-producto',
    templateUrl: './pantalla-producto.component.html',
    styleUrls: ['./pantalla-producto.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgForOf,
        NgIf,
        ProductoComponent,
        RouterLink,
        TarjetaAmigosComponent,
        FooterComponent,
        BotonAgregarComponent
    ]
})
export class PantallaProductoComponent implements OnInit {
    imagen: string = "https://picsum.photos/500/500?random=4";
    nombre: string = "Sofa";
    public alertButtons = [
        {
            text: 'No',
            cssClass: 'alert-button-cancel',
        },
        {
            text: 'Si',
            cssClass: 'alert-button-confirm',
        },
    ];

    constructor() {
        addIcons({closeSharp, createSharp})
    }

    ngOnInit() {
    }


    //Función para mostrar la información del producto
    getTotal() {
        return 12;
    }

    getPorPersona() {
        return 12;
    }
}
