import { Component, OnInit } from '@angular/core';
import {IonSearchbar} from "@ionic/angular/standalone";

@Component({
    selector: 'app-navar',
    templateUrl: './navar.component.html',
    styleUrls: ['./navar.component.scss'],
    standalone: true,
    imports: [
        IonSearchbar
    ]
})
export class NavarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  handleInput($event: any) {

  }
}
