import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-boton-agregar',
    templateUrl: './boton-agregar.component.html',
    styleUrls: ['./boton-agregar.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgIf
    ]
})
export class BotonAgregarComponent  implements OnInit {
  agregar:boolean = false;
  @Input() textoAyuda:string = "Ingrese aquí el nombre";
  constructor() { }

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
