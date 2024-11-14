import {Component, OnInit} from '@angular/core';

import {MenuTajetaCuentaComponent} from "../../tarjetas/menu-tajeta-cuenta/menu-tajeta-cuenta.component";
import {IonicModule} from "@ionic/angular";
import {MenuTarjetaAmigosComponent} from "../../tarjetas/menu-tarjeta-amigos/menu-tarjeta-amigos.component";
import {addIcons} from "ionicons";
import {add} from "ionicons/icons";
import {NgForOf, NgIf} from "@angular/common";
import {BotonAgregarComponent} from "../../componentes/boton-agregar/boton-agregar.component";
import {FooterComponent} from "../../componentes/footer/footer.component";
import {NavarComponent} from "../../componentes/navar/navar.component";
import {TarjetaAmigosComponent} from "../../tarjetas/tarjeta-amigos/tarjeta-amigos.component";
import {Persona} from "../../modelos/Persona";
import {UsuarioService} from "../../service/usuario.service";
import {IonIcon} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-amigos',
    templateUrl: './amigos.component.html',
    styleUrls: ['./amigos.component.scss'],
    standalone: true,
    imports: [
        FooterComponent,
        NavarComponent,
        MenuTajetaCuentaComponent,
        IonicModule,
        MenuTarjetaAmigosComponent,
        NgIf,
        BotonAgregarComponent,
        TarjetaAmigosComponent,
        NgForOf,
        RouterLink,
        IonIcon,
        FormsModule,
    ]
})
export class AmigosComponent implements OnInit {
    amigos: Persona[] = [];
    todosAmigos: Persona[] = [];

    constructor(private usuarioService: UsuarioService) {
        addIcons({add})
    }

    ngOnInit() {
        this.recolectaAmigos()
    }

    recolectaAmigos() {
        this.usuarioService.getAmigos().subscribe(datos => {
            this.amigos = datos;
            this.todosAmigos = datos;
        });
    }

    handleInput($event: any) {
        this.amigos = this.todosAmigos;
        const query = $event.target.value.toLowerCase();
        requestAnimationFrame(() => {
            this.amigos = this.todosAmigos.filter(item => {
                return item.username.toLowerCase().indexOf(query) > -1;
            });
        });
    }
}
