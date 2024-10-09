import { Component, OnInit } from '@angular/core';
import {
  IonAvatar, IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid, IonIcon, IonRow
} from "@ionic/angular/standalone";
import {MiniMenuImgsComponent} from "../../mini-menu-imgs/mini-menu-imgs.component";
import {addIcons} from "ionicons";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-tarjeta-amigos',
    templateUrl: './tarjeta-amigos.component.html',
    styleUrls: ['./tarjeta-amigos.component.scss'],
    standalone: true,
  imports: [
    IonAvatar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonGrid,
    IonRow,
    MiniMenuImgsComponent,
    IonButton,
    IonIcon,
    RouterLink
  ]
})
export class TarjetaAmigosComponent  implements OnInit {

  constructor() {
    addIcons({'add-outline': 'trash-outline'});
  }

  ngOnInit() {}

}
