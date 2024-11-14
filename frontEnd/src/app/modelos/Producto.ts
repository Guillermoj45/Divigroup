export class Producto {
    imagen: string;
    nombre: string;
    precio: number | null;
    fecha: Date;

    constructor(imagen: string, nombre: string, precio: number, fecha: Date) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio || null;
        this.fecha = fecha;
    }
}
