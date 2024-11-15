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


    constructor(id?: number, descripcion?: string, imagen?: string, imagenFondo?: string) {
        this.id = id?? 0;
        this.descripcion = descripcion?? "";
        this.imagen = imagen ?? "";
        this.imagenFondo = imagenFondo ?? "";
    }

    static cuentaSaldo(cuenta: Cuenta) {
         cuenta.saldo = 0;
         cuenta.productos!.forEach(producto => {
             cuenta.saldo += producto.precio ? producto.precio : 0;
             cuenta.saldo = Number.parseFloat(cuenta.saldo.toFixed(2));
        });
    }
    cuentaSaldo2() {
        this.saldo = 0;
        this.productos!.forEach(producto => {
            this.saldo += producto.precio ? producto.precio : 0;
            this.saldo = Number.parseFloat(this.saldo.toFixed(2));
        });
    }
}

