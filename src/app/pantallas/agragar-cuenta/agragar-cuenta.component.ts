import {Component, Input, OnInit} from '@angular/core';
import {FooterComponent} from "../../footer/footer.component";
import {IonicModule} from "@ionic/angular";
import {MiniMenuImgsComponent} from "../../mini-menu-imgs/mini-menu-imgs.component";
import {addIcons} from "ionicons";
import {cloudUploadOutline} from "ionicons/icons";
import {Persona} from "../../../assets/js/Persona";
import {TarjetaAmigosComponent} from "../../tarjetas/tarjeta-amigos/tarjeta-amigos.component";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-agragar-cuenta',
  templateUrl: './agragar-cuenta.component.html',
  styleUrls: ['./agragar-cuenta.component.scss'],
  standalone: true,
  imports: [
    FooterComponent,
    IonicModule,
    MiniMenuImgsComponent,
    TarjetaAmigosComponent,
    NgForOf,
    RouterLink
  ]
})
export class AgragarCuentaComponent  implements OnInit {
  @Input() invitados:Persona[] = [];
  constructor() {
    addIcons({cloudUploadOutline})
    this.invitados = [
      new Persona(1, "Juan","https://picsum.photos/500/500?random=0"),
      new Persona(2, "Pedro","https://picsum.photos/500/500?random=1"),
      new Persona(3, "Maria", "https://picsum.photos/500/500?random=2"),
      new Persona(4, "Jose", "https://picsum.photos/500/500?random=3"),
      new Persona(5, "Luis", "https://picsum.photos/500/500?random=4"),
    ]
  }

  ngOnInit() {}

  agregarCuenta(){
    console.log("Agregar cuenta")
  }


  cancelar(){
    console.log("Cancelar")
  }

}
