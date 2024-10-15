import {Component, OnInit} from '@angular/core';
import {TarjetaAmigosComponent} from "../tarjeta-amigos/tarjeta-amigos.component";

@Component({
  selector: 'app-menu-tarjeta-amigos',
  templateUrl: './menu-tarjeta-amigos.component.html',
  styleUrls: ['./menu-tarjeta-amigos.component.scss'],
  standalone: true,
  imports: [
    TarjetaAmigosComponent
  ]
})
export class MenuTarjetaAmigosComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
