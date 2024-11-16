import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cuenta} from "../modelos/Cuenta";
import {Producto} from "../modelos/Producto";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

    pushProducto(cuenta:Cuenta, nuevoProducto:Producto){
        let lugar = (cuenta.productos?.length ?? 0) - 1;
        nuevoProducto.fecha = undefined;
        let enviar= {
          "idGrupo": cuenta.id,
          "producto": nuevoProducto
        }
        console.log(enviar);

        this.http.post<Producto>('/api/grupo/gasto/nuevo', enviar).subscribe({
            next: (data) => {
                cuenta.productos!.push(data);
                Cuenta.cuentaSaldo(cuenta);
                this.getPorPersona(cuenta);
            },
            error: (err) => {
                console.error('Error occurred:', err);
            },
            complete: () => {
                console.log('Request completed');
            }
        });

        return ;
        }

    getPorPersona(cuenta: Cuenta) {
        let total: number = cuenta.saldo;
        let personas: number = cuenta.personas?.length || 1;
        cuenta.porPersona = (total / personas).toFixed(2);
    }
}
