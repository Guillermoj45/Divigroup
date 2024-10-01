import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle, IonCardSubtitle, IonCardContent, IonSearchbar, IonList, IonItem, IonLabel, IonImg
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
    IonSearchbar,
    IonList,
    IonItem,
    IonLabel,
    IonImg,
  ],
})
export class HomePage {
  constructor() {}
  public data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  public results = [...this.data];

  handleInput(event: any) {
    console.log(event)
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
}
