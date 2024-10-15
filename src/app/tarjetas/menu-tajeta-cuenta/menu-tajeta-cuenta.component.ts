import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {TajetaCuentaComponent} from "../tajeta-cuenta/tajeta-cuenta.component";

@Component({
  selector: 'app-menu-tajeta-cuenta',
  templateUrl: './menu-tajeta-cuenta.component.html',
  styleUrls: ['./menu-tajeta-cuenta.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    TajetaCuentaComponent
  ]
})


export class MenuTajetaCuentaComponent implements OnInit {
  items: String[] = [];

  constructor() {
  }

  ngOnInit() {
  }


}
