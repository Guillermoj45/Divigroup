import { Component, OnInit } from '@angular/core';
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg} from "@ionic/angular/standalone";

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
        IonImg
    ]
})
export class TajetaCuentaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
