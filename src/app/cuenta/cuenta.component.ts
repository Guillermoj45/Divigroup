import {Component, NgIterable, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {Cuenta} from "../../assets/js/Cuenta";
import {NgForOf, NgIf} from "@angular/common";
import {TajetaCuentaComponent} from "../tarjetas/tajeta-cuenta/tajeta-cuenta.component";
import {AmigoComponent} from "../pantallas/amigo/amigo.component";
import {MenuTarjetaAmigosComponent} from "../tarjetas/menu-tarjeta-amigos/menu-tarjeta-amigos.component";
import {TarjetaAmigosComponent} from "../tarjetas/tarjeta-amigos/tarjeta-amigos.component";
import {Producto} from "../../assets/js/Producto";
import {ProductoComponent} from "../producto/producto.component";

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
    ProductoComponent
  ]
})
export class CuentaComponent  implements OnInit {
  nombre: string = 'Nombre de cuenta';
  imagen: string = 'https://picsum.photos/500/500?random=4';
  cuentas: Cuenta[];
  segmento: string = 'cuentas';
  productos: NgIterable<Producto> | undefined | null;

  constructor() {
    this.cuentas = [new Cuenta('Cuenta 1', 100, 'https://picsum.photos/500/500?random=3', 1)];
    this.productos = [new Producto('Producto 1', '20', 1, new Date())];
  }

  ngOnInit() {
  }

  onSegmentChange(event: any) {
    this.segmento = event.detail.value;
  }

}

