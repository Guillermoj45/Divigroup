import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {TajetaCuentaComponent} from "../tajeta-cuenta/tajeta-cuenta.component";
import {Cuenta} from "../../modelos/Cuenta";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-menu-tajeta-cuenta',
  templateUrl: './menu-tajeta-cuenta.component.html',
  styleUrls: ['./menu-tajeta-cuenta.component.scss'],
  standalone: true,
    imports: [
        IonicModule,
        TajetaCuentaComponent,
        NgForOf
    ]
})


export class MenuTajetaCuentaComponent implements OnInit {
  items: String[] = [];
    @Input() cuentas:Cuenta[]= new Array<Cuenta>();

  constructor() {
  }

  ngOnInit() {
  }


}
