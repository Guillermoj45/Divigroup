import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {IonRouterLink} from "@ionic/angular/standalone";
import {Router, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {LoginService} from "../../../service/login.service";

@Component({
    selector: 'app-inicio-sesion',
    templateUrl: './inicio-sesion.component.html',
    styleUrls: ['./inicio-sesion.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        IonRouterLink,
        RouterModule,
        FormsModule
    ]
})
export class InicioSesionComponent implements OnInit {
    username: string = "";
    password: string = "";
    idUsuario: number = 0;
    isAlertOpen = false;
    alertButtons = ['Action'];
    tituloAlerta:String = "";
    mensajeAlerta:String = "";

    constructor(private inicio: LoginService, private router: Router) {
    }

    ngOnInit() {
    }

    setOpen(isOpen: boolean) {
        this.isAlertOpen = isOpen;
    }

    customCounterFormatter(inputLength: number, maxLength: number) {
        return `${maxLength - inputLength} characters remaining`;
    }

    login() {
        if (this.username == "" || this.password == "") {
            this.tituloAlerta = "Error al iniciar sesión";
            this.mensajeAlerta = "Los campos no pueden estar vacios";
            this.setOpen(true);
            return;
        }

        this.username.trim();
        this.password.trim();
        this.inicio.login(this.username, this.password).subscribe({
                next: (response) => {
                    this.inicioSesion(response);
                },
                error: (error) => {
                    console.error(error);
                }
            }
        )
    }

    inicioSesion(reponse: number) {
        if (reponse == -1) {
            console.error("Error al iniciar sesión");
            this.tituloAlerta = "Error al iniciar sesión";
            this.mensajeAlerta = "Usuario o contraseña incorrectos";
            this.setOpen(true);
        } else {
            console.log("Inicio sesión con exito");
            console.log("ID de usuario: " + reponse);
            document.cookie = 'idUsuario=' + reponse + '; path=/;';
            this.router.navigate(['/home']);
        }
    }

}
