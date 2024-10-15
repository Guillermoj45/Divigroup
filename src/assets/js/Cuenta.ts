import {Persona} from './Persona';
import {Producto} from "./Producto";

export class Cuenta {
  constructor(nombre: string, saldo: number, imagen: string, id: number, personas?: Array<Persona>, productos?: Array<Producto>) {
    this._nombre = nombre;
    this._saldo = saldo;
    this._imagen = imagen;
    this._id = id;
    this._personas = personas || [];
    this._productos = productos || [];
  }

  private _nombre: string;

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  private _saldo: number;

  get saldo(): number {
    return this._saldo;
  }

  set saldo(value: number) {
    this._saldo = value;
  }

  private _imagen: string;

  get imagen(): string {
    return this._imagen;
  }

  set imagen(value: string) {
    this._imagen = value;
  }

  private _id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _personas: Array<Persona>;

  get personas(): Array<Persona> {
    return this._personas;
  }

  set personas(value: Array<Persona>) {
    this._personas = value;
  }

  private _productos: Array<Producto>;

  get productos(): Array<Producto> {
    return this._productos;
  }

  set productos(value: Array<Producto>) {
    this._productos = value;
  }
}

