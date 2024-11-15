import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cuenta} from "../modelos/Cuenta";
import {map, Observable} from "rxjs";
import {Producto} from "../modelos/Producto";

@Injectable({
    providedIn: 'root'
})
export class CuentaService {

    constructor(private http: HttpClient) {
    }

    postCrearCuenta(cuenta: Cuenta): Observable<Cuenta> {
        return this.http.post<Cuenta>('api/crear-cuenta', cuenta);
    }

    public getObtenerCuentas(): Observable<Cuenta[]> {
        return this.http.get<Cuenta[]>(`/api/grupo`).pipe(map((datos) => datos.map((dato) => new Cuenta(dato.id, dato.descripcion, dato.imagen, dato.imagenFondo)))

        );
    }

    public getObtenerGastos(cuenta: Cuenta): Observable<Producto[]> {
        return this.http.get<Producto[]>(`/api/grupo/gasto/${cuenta.id}`);
    }

    getPuestaComun(idGrupo:number): Observable<any> {
        return this.http.get<any>(`/api/grupo/gastos/${idGrupo}`);
    }
}
