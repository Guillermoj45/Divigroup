import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {IonRouterLink} from "@ionic/angular/standalone";
import {RouterModule, Router} from "@angular/router";
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

  constructor(private inicio: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  login() {
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

  inicioSesion(reponse:number){
      if (reponse == -1){
        console.error("Error al iniciar sesión");
      } else {
          console.log("Inicio sesión con exito");
          console.log("ID de usuario: " + reponse);
          document.cookie = 'idUsuario=' + reponse + '; path=/;';
          this.router.navigate(['/home']);
      }
  }

}
