import { Component, OnInit } from '@angular/core';
import {FooterComponent} from "../../footer/footer.component";
import {NavarComponent} from "../../navar/navar.component";
import {MenuTajetaCuentaComponent} from "../../tarjetas/menu-tajeta-cuenta/menu-tajeta-cuenta.component";
import {IonicModule} from "@ionic/angular";
import {MenuTarjetaAmigosComponent} from "../../tarjetas/menu-tarjeta-amigos/menu-tarjeta-amigos.component";

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.scss'],
  standalone: true,
  imports: [
    FooterComponent,
    NavarComponent,
    MenuTajetaCuentaComponent,
    IonicModule,
    MenuTarjetaAmigosComponent
  ]
})
export class AmigosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
