import { Component, OnInit } from '@angular/core';
import {FooterComponent} from "../../footer/footer.component";
import {NavarComponent} from "../../navar/navar.component";
import {MenuTajetaCuentaComponent} from "../../tarjetas/menu-tajeta-cuenta/menu-tajeta-cuenta.component";
import {IonicModule} from "@ionic/angular";
import {MenuTarjetaAmigosComponent} from "../../tarjetas/menu-tarjeta-amigos/menu-tarjeta-amigos.component";
import {addIcons} from "ionicons";
import {add} from "ionicons/icons";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.scss'],
  standalone: true,
  imports: [
    FooterComponent,
    NavarComponent,
    MenuTajetaCuentaComponent,
    IonicModule,
    MenuTarjetaAmigosComponent,
    NgIf
  ]
})
export class AmigosComponent  implements OnInit {
  agregar:boolean = false;
  constructor() {
    addIcons({add})
  }

  ngOnInit() {}

  setAgregar(newValor:boolean){
    this.agregar = newValor;
  }

  agregarAmigo(){
    let input = document.getElementById("inputAmigo") as HTMLInputElement;
    const nombre = input ? input.value : "";
    if (nombre == "") {
      console.log("No se ingreso ningun nombre");
      return;
    }

    console.log(nombre);
    this.setAgregar(false);
  }
}
