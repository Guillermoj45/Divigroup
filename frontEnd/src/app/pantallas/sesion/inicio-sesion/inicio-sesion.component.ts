import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {IonRouterLink} from "@ionic/angular/standalone";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    IonRouterLink,
    RouterModule
  ]
})
export class InicioSesionComponent implements OnInit {
  id: number = 1;

  constructor() {
  }

  ngOnInit() {
    localStorage.setItem('idUsuario', this.id.toString());
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }
}
