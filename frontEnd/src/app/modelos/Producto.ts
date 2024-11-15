export class Producto {
    imagen: string;
    nombre: string;
    precio: number | null;
    fecha?: string;

    constructor(imagen: string, nombre: string, precio: number, fecha: Date) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio || null;
        this.fecha = `${fecha.getHours()}:${fecha.getMinutes()}`;
    }
}
