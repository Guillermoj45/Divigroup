import { Component, OnInit } from '@angular/core';
import {IonAvatar} from "@ionic/angular/standalone";

@Component({
    selector: 'app-mini-menu-imgs',
    templateUrl: './mini-menu-imgs.component.html',
    styleUrls: ['./mini-menu-imgs.component.scss'],
    standalone: true,
    imports: [
        IonAvatar
    ]
})
export class MiniMenuImgsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
