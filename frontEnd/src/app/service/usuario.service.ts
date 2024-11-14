import {Injectable} from '@angular/core';
import {Cuenta} from "../modelos/Cuenta";
import {Persona} from "../modelos/Persona";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) {
    }

    introducirUsuariosCuenta(cuenta: Cuenta) {
        this.http.get<any>(`api/grupo/participantes/${cuenta.id}`).subscribe(datos => {
            cuenta.personas = datos.participantes;

        });
    }

    getAmigos(): Observable<Persona[]> {
        return this.http.get<any>(`api/amigos`)
    }
}
