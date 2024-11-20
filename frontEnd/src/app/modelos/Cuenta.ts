import {Persona} from './Persona';
import {Producto} from "./Producto";

export class Cuenta {
    id?: number = undefined;
    nombre: string = "";
    descripcion: string = "";
    saldo: number = 100;
    imagen: string = "";
    imagenFondo: string = "";
    personas: Persona[]=[];
    productos?: Producto[] = [];
    porPersona: string = "";


    constructor(id?: number, nombre?:string, descripcion?: string, imagen?: string, imagenFondo?: string) {
        this.id = id;
        this.nombre = nombre ?? "";
        this.descripcion = descripcion?? "";
        this.imagen = imagen ?? "";
        this.imagenFondo = imagenFondo ?? "";
    }

    static cuentaSaldo(cuenta: Cuenta) {
         cuenta.saldo = 0;
         if (cuenta.productos === undefined) {
             cuenta.productos = [];
         }
         if (cuenta.productos.length === 0) {
             return;
         }

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

