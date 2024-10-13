import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {MiniMenuImgsComponent} from '../../mini-menu-imgs/mini-menu-imgs.component'
import {Producto} from "../../../assets/js/Producto";
import {BotonAgregarComponent} from "../../boton-agregar/boton-agregar.component";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    MiniMenuImgsComponent,
    BotonAgregarComponent
  ]
})

export class ProductoComponent  implements OnInit {
  @Input() producto:Producto= new Producto('https://picsum.photos/80/80?random=1', '20', 0, new Date());
  constructor() {
  }

  ngOnInit() {}

}
