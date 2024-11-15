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

     static cuentaSaldo(cuenta: Cuenta) {
         cuenta.saldo = 0;
         cuenta.productos!.forEach(producto => {
             cuenta.saldo += producto.precio ? producto.precio : 0;
             cuenta.saldo = Number.parseFloat(cuenta.saldo.toFixed(2));
        });
    }
}

