import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {
    }

    public login(username: string, password: string): Observable<number> {
        document.cookie = '';
        return this.http.get<number>(`/api/usuario/login/${username}/${password}`)

    }
}
