import {Persona} from './Persona';
import {Producto} from "./Producto";
export class Cuenta {
  private _nombre: string;
  private _saldo: number;
  private _imagen: string;
  private _id: number;
  private _personas: Array<Persona>;
  private _productos: Array<Producto>;

  constructor(nombre: string, saldo: number, imagen: string, id: number, personas?: Array<Persona>, productos?: Array<Producto>) {
    this._nombre = nombre;
    this._saldo = saldo;
    this._imagen = imagen;
    this._id = id;
    this._personas = personas || [];
    this._productos = productos || [];
  }


  get productos(): Array<Producto> {
    return this._productos;
  }

  set productos(value: Array<Producto>) {
    this._productos = value;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get saldo(): number {
    return this._saldo;
  }

  set saldo(value: number) {
    this._saldo = value;
  }

  get imagen(): string {
    return this._imagen;
  }

  set imagen(value: string) {
    this._imagen = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get personas(): Array<Persona> {
    return this._personas;
  }

  set personas(value: Array<Persona>) {
    this._personas = value;
  }
}

