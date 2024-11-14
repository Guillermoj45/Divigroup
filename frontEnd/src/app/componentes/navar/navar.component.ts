import { Component, OnInit } from '@angular/core';
import {IonIcon, IonImg, IonSearchbar} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";
import {Cuenta} from "../../modelos/Cuenta";

@Component({
    selector: 'app-navar',
    templateUrl: './navar.component.html',
    styleUrls: ['./navar.component.scss'],
    standalone: true,
  imports: [
    IonSearchbar,
    IonIcon,
    IonImg,
    RouterLink,
  ]
})
export class NavarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}


    handleInput(event: any) {
        console.log(event)

    }
}
