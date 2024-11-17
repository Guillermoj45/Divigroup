import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cuenta} from "../modelos/Cuenta";
import {map, Observable} from "rxjs";
import {Producto} from "../modelos/Producto";
import {Persona} from "../modelos/Persona";
import {body} from "ionicons/icons";

@Injectable({
    providedIn: 'root'
})
export class CuentaService {

    constructor(private http: HttpClient) {
    }

    agregarPersona(cuenta: Cuenta, persona: Persona): Observable<any> {
        console.log(cuenta, persona);
        let mensaje = {
            idGrupo: cuenta.id,
            idUsuario: persona.id
        }
        return this.http.post<any>('/api/grupo/participantes/nuevo', mensaje);
    }

    eliminarPersona(cuenta: Cuenta, persona: Persona): Observable<any> {
         let mensaje = {
            idGrupo: cuenta.id,
             idUsuario: persona.id
         }

        return this.http.delete<Cuenta>('/api/grupo/participantes/eliminar', {body: mensaje});
    }

    postCrearCuenta(cuenta: Cuenta): Observable<Cuenta> {
        console.log(cuenta);
        let resultado = this.http.post<Cuenta>('/api/grupo/nuevo', cuenta);
        resultado.subscribe((cuenta) => {
            console.log(cuenta);
        })
        return resultado;
    }

    public getObtenerCuentas(): Observable<Cuenta[]> {
        return this.http.get<Cuenta[]>(`/api/grupo`).pipe(map((datos) => datos.map((dato) => new Cuenta(dato.id, dato.nombre, dato.descripcion, dato.imagen, dato.imagenFondo)))

        );
    }

    public getObtenerGastos(cuenta: Cuenta): Observable<Producto[]> {
        return this.http.get<Producto[]>(`/api/grupo/gasto/${cuenta.id}`);
    }

    getPuestaComun(idGrupo:number): Observable<any> {
        return this.http.get<any>(`/api/grupo/gastos/${idGrupo}`);
    }
}
