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

  agregarArchivo(event: Event) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';
    fileInput.onchange = this.onFileSelected.bind(this);
    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('Selected file:', file);
      // Aquí puedes manejar el archivo seleccionado
    }
  }
  agregarImagen(event: Event) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';
    fileInput.onchange = this.onImageSelected.bind(this);
    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
  }

  onImageSelected(event: Event) {
    let imagen = document.getElementById('Avatar');
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (imagen != null) {
        imagen.setAttribute('src', URL.createObjectURL(file).toString());
      }
      console.log('Selected file:', file);
    }
  }

}
