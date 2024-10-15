import {IonicModule} from "@ionic/angular";
import {NgStyle} from "@angular/common";
import {MenuTajetaCuentaComponent} from "../../tarjetas/menu-tajeta-cuenta/menu-tajeta-cuenta.component";
import {TajetaCuentaComponent} from "../../tarjetas/tajeta-cuenta/tajeta-cuenta.component";
import {Component, OnInit} from "@angular/core";
import {TarjetaAmigosComponent} from "../../tarjetas/tarjeta-amigos/tarjeta-amigos.component";
import {FooterComponent} from "../../componentes/footer/footer.component";
import {MiniMenuImgsComponent} from "../../componentes/mini-menu-imgs/mini-menu-imgs.component";

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
    TarjetaAmigosComponent,
    MiniMenuImgsComponent
  ]
})
export class AmigoComponent  implements OnInit {
  foto:string = 'https://picsum.photos/1000/1000?random=4';
  imagenFondo:string = 'https://picsum.photos/5000/5000?random=4';
  nombre: string = 'Nombre de amigo';
  isActionSheet:boolean = false;
  constructor() {}

  ngOnInit() {
    this.containerCuentas();
  }

  private containerCuentas(){
  }

  public denunciar() {
    console.log('Denunciar');
  }

  public bloquear() {
    console.log('Bloquear');
  }

  public dejarDeSerAmigo() {
    console.log('Dejar de ser amigo');
  }

  public actionSheetButtons = [
    {
      text: 'Denunciar',
      role: 'destructive',
      handler: () => {
        this.denunciar();
      },
      data: {
        action: 'Denunciar',
      },
    },
    {
      text: 'Bloquear',
      role: 'destructive',
      handler: () => {
        this.bloquear();
      },
      data: {
        action: 'Bloquear',
      },
    },
    {
      text: 'Dejar de ser amigo',
      role: 'destructive',
      handler: () => {
        this.dejarDeSerAmigo();
      },
      data: {
        action: 'Bloquear',
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  setOpen(isOpen:boolean){
    this.isActionSheet = isOpen;
  }
}
