import { Component, OnInit } from '@angular/core';
import {
    IonAvatar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonGrid, IonRow
} from "@ionic/angular/standalone";
import {MiniMenuImgsComponent} from "../../mini-menu-imgs/mini-menu-imgs.component";

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
        MiniMenuImgsComponent
    ]
})
export class TarjetaAmigosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
