import {Component, OnInit} from '@angular/core';

import {MenuTajetaCuentaComponent} from "../../tarjetas/menu-tajeta-cuenta/menu-tajeta-cuenta.component";
import {IonicModule} from "@ionic/angular";
import {MenuTarjetaAmigosComponent} from "../../tarjetas/menu-tarjeta-amigos/menu-tarjeta-amigos.component";
import {addIcons} from "ionicons";
import {add} from "ionicons/icons";
import {NgIf} from "@angular/common";
import {BotonAgregarComponent} from "../../componentes/boton-agregar/boton-agregar.component";
import {FooterComponent} from "../../componentes/footer/footer.component";
import {NavarComponent} from "../../componentes/navar/navar.component";

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
    MenuTarjetaAmigosComponent,
    NgIf,
    BotonAgregarComponent
  ]
})
export class AmigosComponent implements OnInit {
  constructor() {
    addIcons({add})
  }

  ngOnInit() {
  }

}
