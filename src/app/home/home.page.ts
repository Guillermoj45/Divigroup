import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle, IonCardSubtitle, IonCardContent
} from '@ionic/angular/standalone';
import {NavbarComponent} from "../navbar/navbar.component";
import {InicioSesionComponent} from "../inicio-sesion/inicio-sesion.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    InicioSesionComponent
  ],
})
export class HomePage {
  constructor() {}
}
