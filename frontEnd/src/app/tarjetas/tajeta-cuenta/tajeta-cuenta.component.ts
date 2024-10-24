import {Component, OnInit} from '@angular/core';
import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonRow
} from "@ionic/angular/standalone";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MiniMenuImgsComponent} from "../../componentes/mini-menu-imgs/mini-menu-imgs.component";

@Component({
  selector: 'app-tajeta-cuenta',
  templateUrl: './tajeta-cuenta.component.html',
  styleUrls: ['./tajeta-cuenta.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonImg,
    IonAvatar,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    NgOptimizedImage,
    MiniMenuImgsComponent,
    RouterLink
  ]
})
export class TajetaCuentaComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
