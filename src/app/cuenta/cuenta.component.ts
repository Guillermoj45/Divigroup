import {Component, NgIterable, OnInit, signal} from '@angular/core';
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
import {FooterComponent} from "../footer/footer.component";

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
    FooterComponent
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
    this.productos = [new Producto('https://picsum.photos/80/80?random=1', 'salchichas', 1, new Date())];
    this.productos = [
      ...this.productos,
      new Producto('https://picsum.photos/80/80?random=2', 'kepchup', 1, new Date())
    ];
  }

  ngOnInit() {
  }

  onSegmentChange(event: any) {
    this.segmento = event.detail.value;
  }

  getTotal(){
    let total:number = 0;
    if (this.productos === null || this.productos === undefined){
      return total;
    }
    for (let producto of this.productos){
      total += producto.precio;
    }
    return total;
  }
  getPorPersona(){
    let total:number = this.getTotal();
    let personas:number = this.cuentas.length;
    return total / personas;
  }

}

