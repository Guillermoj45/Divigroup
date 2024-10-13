import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {Producto} from "../../assets/js/Producto";
import {add, camera, clipboardOutline} from "ionicons/icons";
import {addIcons} from "ionicons";
import {TarjetaAmigosComponent} from "../tarjetas/tarjeta-amigos/tarjeta-amigos.component";
import {NgForOf} from "@angular/common";
import {Persona} from "../../assets/js/Persona";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    TarjetaAmigosComponent,
    NgForOf,
    FooterComponent
  ]
})
export class AgregarProductoComponent  implements OnInit {
  prodcuto:Producto = new Producto('https://picsum.photos/800/800?random=1', '', 0, new Date());
  invitados:Persona[] = [
    new Persona(1, 'Juan', 'https://picsum.photos/800/800?random=2'),
    new Persona(2, 'Pedro', 'https://picsum.photos/800/800?random=3'),
    new Persona(3, 'Maria', 'https://picsum.photos/800/800?random=4'),
    new Persona(4, 'Ana', 'https://picsum.photos/800/800?random=5'),
    new Persona(5, 'Luis', 'https://picsum.photos/800/800?random=6'),
  ]

  constructor() {
    addIcons({camera, clipboardOutline})
  }

  ngOnInit() {}

}
