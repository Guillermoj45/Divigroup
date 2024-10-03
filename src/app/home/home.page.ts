import { Component } from '@angular/core';
import {
  IonContent,
  IonSearchbar,
} from '@ionic/angular/standalone';
import {TajetaCuentaComponent} from "../tajeta-cuenta/tajeta-cuenta.component";
import {MenuTajetaCuentaComponent} from "../menu-tajeta-cuenta/menu-tajeta-cuenta.component";
import {addIcons} from "ionicons";
import {addOutline, document} from "ionicons/icons";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [

    TajetaCuentaComponent,
    MenuTajetaCuentaComponent,
    FooterComponent,
    IonSearchbar,
    IonContent,
  ],
})


export class HomePage {
  constructor() {
    addIcons({'add-outline': addOutline, 'document': document});
  }

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
