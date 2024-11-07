import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Cuenta} from "../modelos/Cuenta";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private http: HttpClient) { }

  postCrearCuenta(cuenta: Cuenta): Observable<Cuenta>{

    return this.http.post<Cuenta>('http://localhost:3000/crear-cuenta', cuenta);
  }

  public getObtenerCuentas(): Observable<Cuenta[]>{
    let idUsuario:number = parseInt(<string>localStorage.getItem('idUsuario'));
    return this.http.get<Cuenta[]>('http://localhost:3000/obtener-cuentas/'+idUsuario);
  }

}
