import {Persona} from './Persona';
import {Producto} from "./Producto";

export class Cuenta {
  id: number;
  nombre: string;
  descripcion: string="";
  saldo?: number;
  imagen: string;
  personas?: Array<Persona>;
  productos?: Array<Producto>;

  constructor(nombre: string, saldo: number, imagen: string, id: number, personas?: Array<Persona>, productos?: Array<Producto>) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.imagen = imagen;
    this.id = id;
    this.personas = personas || [];
    this.productos = productos || [];
  }

}

