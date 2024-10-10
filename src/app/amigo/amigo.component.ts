import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FooterComponent} from "../footer/footer.component";
import {NgStyle} from "@angular/common";
import {MenuTajetaCuentaComponent} from "../tarjetas/menu-tajeta-cuenta/menu-tajeta-cuenta.component";
import {TajetaCuentaComponent} from "../tarjetas/tajeta-cuenta/tajeta-cuenta.component";
import {Cuenta} from "../../assets/js/Cuenta";
import {Persona} from "../../assets/js/Persona";

@Component({
  selector: 'app-amigo',
  templateUrl: './amigo.component.html',
  styleUrls: ['./amigo.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FooterComponent,
    NgStyle,
    MenuTajetaCuentaComponent,
    TajetaCuentaComponent
  ]
})
export class AmigoComponent  implements OnInit {
  foto:string = 'https://picsum.photos/80/80?random=4';
  imagenFondo:string = 'https://picsum.photos/500/500?random=4';
  nome: string = 'Nome do Amigo';


  constructor() {}

  ngOnInit() {
    this.containerCuentas();
  }

  private containerCuentas(){
    let cuentas = [new Cuenta('Conta 1', 100, 'https://picsum.photos/80/80?random=1', 1, [new Persona(1, 'Usuario 1')])];
    console.log(cuentas);
    let containerCuentas = document.getElementById('containerCuentas');
    console.log(containerCuentas);
    if (containerCuentas === null) {
      return;
    }
    for (let cuenta of cuentas){
      console.log(cuenta);
    }
  }
}
