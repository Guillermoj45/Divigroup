import {Component, OnInit} from '@angular/core';

import {IonicModule} from "@ionic/angular";
import {NavarComponent} from "../../../componentes/navar/navar.component";
import {FooterComponent} from "../../../componentes/footer/footer.component";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  standalone: true,
  imports: [
    NavarComponent,
    FooterComponent,
    IonicModule
  ]
})
export class PerfilComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }

  openFileExplorer() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';
    fileInput.onchange = this.onFileSelected.bind(this);
    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
  }


  onFileSelected(event: Event) {
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
