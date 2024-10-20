import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {add, arrowBack} from "ionicons/icons";
import {addIcons} from "ionicons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterLink
  ]
})
export class NotificacionesComponent  implements OnInit {

  constructor() {
    addIcons({arrowBack})
  }

  ngOnInit() {}

}
