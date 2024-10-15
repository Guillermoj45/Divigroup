import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {add} from "ionicons/icons";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-password-olvidada',
  templateUrl: './password-olvidada.component.html',
  styleUrls: ['./password-olvidada.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule
  ]
})
export class PasswordOlvidadaComponent  implements OnInit {
  texto: string = '';
  constructor() {
    addIcons({add})
  }

  ngOnInit() {}

  comprobacion(){
    if(this.texto == ''){
      alert('Introduce un usuario valido');
    }else{
      alert('Se ha enviado un correo a la dirección introducida');
    }
  }
}
