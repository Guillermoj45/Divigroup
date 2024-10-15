import {Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {Mensaje} from "../../../assets/js/Mensaje";
import {IonicModule} from "@ionic/angular";
import {FooterComponent} from "../../componentes/footer/footer.component";
import {RouterLink} from "@angular/router";
import {NgClass, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Persona} from "../../../assets/js/Persona";
import {addIcons} from "ionicons";
import {add, arrowBack, camera, paperPlane} from "ionicons/icons";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FooterComponent,
    RouterLink,
    NgClass,
    NgForOf,
    FormsModule
  ]
})
export class ChatComponent implements OnInit {
  @Input() otraPersona: Persona = new Persona(0, 'Usuario X', 'https://picsum.photos/500/500?random=4');
  @Input() mensajes: Array<Mensaje> = [];
  mensaje: string = '';


  constructor() {
    addIcons({add, camera, paperPlane, arrowBack});
    this.mensajes = [
      new Mensaje('Hola buenas tardes', false),
      new Mensaje('¿Me podrías pagar ya el coche?', false),
      new Mensaje('He estado esperando por un tiempo.', false),
      new Mensaje('¿Tienes alguna actualización?', false),
      new Mensaje('Claro!!!', true),
      new Mensaje('Lo siento por la demora.', true),
      new Mensaje('Te haré la transferencia hoy mismo.', true),
      new Mensaje('¿Necesitas algo más?', true)
    ];
  }

  ngOnInit() {}


  enviarMensaje() {
    this.mensajes.push(new Mensaje(this.mensaje, true));
    this.mensaje = '';
  }

}
