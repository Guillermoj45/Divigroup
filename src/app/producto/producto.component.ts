import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {MiniMenuImgsComponent} from '../mini-menu-imgs/mini-menu-imgs.component'
import {Producto} from "../../assets/js/Producto";
import {preloadAndParseTemplate} from "@angular/compiler-cli/src/ngtsc/annotations/component/src/resources";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    MiniMenuImgsComponent
  ]
})
export class ProductoComponent  implements OnInit {
  @Input() producto:Producto= new Producto('Producto 1', '20', 1, new Date());
  constructor() {
  }

  ngOnInit() {}

  protected readonly preloadAndParseTemplate = preloadAndParseTemplate;
}
