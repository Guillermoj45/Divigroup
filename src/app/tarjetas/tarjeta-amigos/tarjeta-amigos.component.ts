import {Component, Input, OnInit} from '@angular/core';
import {
  IonAvatar, IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonCheckbox,
  IonCol,
  IonGrid, IonIcon, IonRow
} from "@ionic/angular/standalone";
import {MiniMenuImgsComponent} from "../../mini-menu-imgs/mini-menu-imgs.component";
import {addIcons} from "ionicons";
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {Persona} from "../../../assets/js/Persona";
import {image} from "ionicons/icons";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-tarjeta-amigos',
    templateUrl: './tarjeta-amigos.component.html',
    styleUrls: ['./tarjeta-amigos.component.scss'],
    standalone: true,
  imports: [
    IonAvatar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonGrid,
    IonRow,
    MiniMenuImgsComponent,
    IonButton,
    IonIcon,
    RouterLink,
    NgIf,
    IonCheckbox,
    FormsModule
  ]
})
export class TarjetaAmigosComponent  implements OnInit {
  @Input() deve:number | null = null;
  @Input() persona:Persona = new Persona(0, 'Usuario X', 'https://picsum.photos/500/500?random=4')
  @Input() seleccionado:boolean | null = null;

  constructor(private router:Router) {
    addIcons({'add-outline': 'trash-outline'});
  }

  ngOnInit() {}

  getColor(){
    if (this.deve === null){
      return 'red';
    }
    if (this.deve > 0){
      return 'green';
    }
    if (this.deve < 0){
      return 'red'
    }
    return 'danger';
  }
  getMensaje(){
    if (this.deve === null){
      return 'No se ha definido';
    }
    if (this.deve > 0){
      return 'Pagado';
    }
    if (this.deve < 0){
      return 'Deben';
    }
    return 'No se ha definido';
  }

  protected readonly image = image;

  cliqueado() {
    if (this.seleccionado === null){
      this.router.navigate(['/amigos/perfil']);
    }else {
      this.seleccionado = !this.seleccionado;
    }
  }
}
