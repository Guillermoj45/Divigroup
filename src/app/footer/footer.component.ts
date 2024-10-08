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
import {addOutline, document, home, people, person} from "ionicons/icons";
import {Router, RouterModule, Routes} from '@angular/router';
import {InicioSesionComponent} from "src/app/pantallas/inicio-sesion/inicio-sesion.component";
import {routes} from "../app.routes";

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
    IonRouterLink,
    RouterModule
  ]
})
export class FooterComponent  implements OnInit {

  constructor(private router: Router) {
    addIcons({'add-outline': addOutline, 'document': document, 'people': people, 'person': person});
  }




  ngOnInit() {}

}
