import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {Producto} from "../../../modelos/Producto";
import {camera, clipboardOutline} from "ionicons/icons";
import {addIcons} from "ionicons";
import {TarjetaAmigosComponent} from "../../../tarjetas/tarjeta-amigos/tarjeta-amigos.component";
import {NgForOf, NgIf} from "@angular/common";
import {Persona} from "../../../modelos/Persona";
import {RouterLink} from "@angular/router";
import {FooterComponent} from "../../../componentes/footer/footer.component";

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    TarjetaAmigosComponent,
    NgForOf,
    FooterComponent,
    NgIf,
    RouterLink
  ]
})
export class AgregarProductoComponent implements OnInit {
  prodcuto: Producto = new Producto('https://picsum.photos/800/800?random=1', '', 0, new Date());
  invitados: Persona[] = [
    new Persona(1, 'Juan', 'https://picsum.photos/800/800?random=2'),
    new Persona(2, 'Pedro', 'https://picsum.photos/800/800?random=3'),
    new Persona(3, 'Maria', 'https://picsum.photos/800/800?random=4'),
    new Persona(4, 'Ana', 'https://picsum.photos/800/800?random=5'),
    new Persona(5, 'Luis', 'https://picsum.photos/800/800?random=6'),
  ]

  constructor() {
    addIcons({camera, clipboardOutline})
  }

  ngOnInit() {
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

    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (this.prodcuto.imagen != null) {
        this.prodcuto.imagen = URL.createObjectURL(file).toString();
        console.log(URL.createObjectURL(file).toString())
      }
    }
  }

  agregarProducto() {
    console.log(this.prodcuto);
  }
}
