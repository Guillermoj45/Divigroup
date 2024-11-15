import {Persona} from './Persona';
import {Producto} from "./Producto";

export class Cuenta {
    id: number = 0;
    nombre: string = "";
    descripcion: string = "";
    saldo: number = 100;
    imagen: string = "";
    imagenFondo: string = "";
    personas: Persona[]=[];
    productos?: Producto[] = [];
}

