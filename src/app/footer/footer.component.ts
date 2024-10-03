import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonFooter,
  IonGrid,
  IonIcon,
  IonRouterLink,
  IonRow,
  IonToolbar
} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {addOutline, document, people, peopleOutline, person} from "ionicons/icons";
import {Routes, RouterModule} from "@angular/router"

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
  imports: [
    IonButton,
    IonButtons,
    IonFooter,
    IonIcon,
    IonToolbar,
    IonGrid,
    IonCol,
    IonRow,
    IonRouterLink
  ]
})
export class FooterComponent  implements OnInit {

  constructor() {
    addIcons({'add-outline': addOutline, 'document': document, 'people': people, 'person': person});
  }
  routes: Routes = [
    { path: 'hola', component: FooterComponent },
    // otras rutas
  ];
  ngOnInit() {}

}
