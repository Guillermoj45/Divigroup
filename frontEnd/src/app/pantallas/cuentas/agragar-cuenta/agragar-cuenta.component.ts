import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {cloudUploadOutline} from "ionicons/icons";
import {Persona} from "../../../modelos/Persona";
import {TarjetaAmigosComponent} from "../../../tarjetas/tarjeta-amigos/tarjeta-amigos.component";
import {NgForOf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {FooterComponent} from "../../../componentes/footer/footer.component";
import {MiniMenuImgsComponent} from "../../../componentes/mini-menu-imgs/mini-menu-imgs.component";
import {UsuarioService} from "../../../service/usuario.service";
import {Cuenta} from "../../../modelos/Cuenta";
import {FormsModule} from "@angular/forms";
import {CuentaService} from "../../../service/cuenta.service";
import {routes} from "../../../app.routes";

@Component({
    selector: 'app-agragar-cuenta',
    templateUrl: './agragar-cuenta.component.html',
    styleUrls: ['./agragar-cuenta.component.scss'],
    standalone: true,
    imports: [
        FooterComponent,
        IonicModule,
        MiniMenuImgsComponent,
        TarjetaAmigosComponent,
        NgForOf,
        RouterLink,
        FormsModule
    ]
})
export class AgragarCuentaComponent implements OnInit {
    @Input() invitados: Persona[] = [];
    cuenta: Cuenta = new Cuenta();
    isAlertOpen = false;
    alertButtons = ['Action'];
    tituloAlerta:String = "";
    mensajeAlerta:String = "";

    constructor(private usuarioService: UsuarioService, private cuentaService: CuentaService, private router: Router) {
        addIcons({cloudUploadOutline})
        this.invitados = [
            new Persona(1, "Juan", "https://picsum.photos/500/500?random=0"),
            new Persona(2, "Pedro", "https://picsum.photos/500/500?random=1"),
            new Persona(3, "Maria", "https://picsum.photos/500/500?random=2"),
            new Persona(4, "Jose", "https://picsum.photos/500/500?random=3"),
            new Persona(5, "Luis", "https://picsum.photos/500/500?random=4"),
        ]
    }

    ngOnInit() {
        this.usuarioService.getAmigos().subscribe((amigos: Persona[]) => {
            this.invitados = amigos;
            this.invitados.forEach((invitado) => {
                invitado.seleccionado = false;
            })
        })
        this.cuenta.imagen = "/assets/img/playa.jpg"
    }

    setOpen(isOpen: boolean) {
        this.isAlertOpen = isOpen;
    }

    agregarCuenta() {
        if (this.cuenta.nombre.length === 0) {
            this.tituloAlerta = "Error al crear cuenta"
            this.mensajeAlerta = "El nombre de la cuenta no puede estar vacio"
            this.setOpen(true)
            console.error("Nombre de la cuenta vacio", "El nombre de la cuenta no puede ser nulo")
            return
        }
        for (let invitado of this.invitados) {
            if (invitado.seleccionado) {
                this.cuenta.personas.push(invitado)
            }
        }

        this.cuentaService.postCrearCuenta(this.cuenta).subscribe((datos) => {
            console.log(datos);
            let cuenta: Cuenta = datos
            cuenta.personas = this.cuenta.personas
            console.log(this.cuenta)
            this.router.navigate(["/cuentas/cuenta"], {state: {"cuenta": cuenta}})
        })


        this.cuenta = new Cuenta()
        this.cuenta.imagen = "/assets/img/playa.jpg"
    }


    cancelar() {
        console.log("Cancelar")
    }

}
