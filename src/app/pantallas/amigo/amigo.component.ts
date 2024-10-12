import {IonicModule} from "@ionic/angular";
import {FooterComponent} from "../../footer/footer.component";
import {NgStyle} from "@angular/common";
import {MenuTajetaCuentaComponent} from "../../tarjetas/menu-tajeta-cuenta/menu-tajeta-cuenta.component";
import {TajetaCuentaComponent} from "../../tarjetas/tajeta-cuenta/tajeta-cuenta.component";
import {Cuenta} from "../../../assets/js/Cuenta";
import {Persona} from "../../../assets/js/Persona";
import {Component, OnInit} from "@angular/core";
import {TarjetaAmigosComponent} from "../../tarjetas/tarjeta-amigos/tarjeta-amigos.component";

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
    TajetaCuentaComponent,
    TarjetaAmigosComponent
  ]
})
export class AmigoComponent  implements OnInit {
  foto:string = 'https://picsum.photos/1000/1000?random=4';
  imagenFondo:string = 'https://picsum.photos/5000/5000?random=4';
  nombre: string = 'Nombre de amigo';
  cuentas: Cuenta[] = [new Cuenta('Cuenta 1', 100, 'https://picsum.photos/5000/5000?random=3', 1, [new Persona(1, 'Usuario 1')])];

  constructor() {}

  ngOnInit() {
    this.containerCuentas();
  }

  private containerCuentas(){

    this.cuentas = [new Cuenta('Cuenta 1', 100, 'https://picsum.photos/80/80?random=1', 1, [new Persona(1, 'Usuario 1')])];
    console.log(this.cuentas);
    let containerCuentas = document.getElementById('containerCuentas');
    console.log(containerCuentas);
    if (containerCuentas === null) {
      return;
    }
    let htmlCuentas:string = '';
    for (let cuenta of this.cuentas){
    }
    console.log(htmlCuentas);

  }
}
