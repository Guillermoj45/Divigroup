import {Component, Input, OnInit} from '@angular/core';
import {Persona} from "../modelos/Persona";
import {Router, RouterLink} from "@angular/router";
import {
    IonAvatar, IonButton,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle, IonCheckbox,
    IonCol,
    IonGrid, IonIcon, IonRow
} from "@ionic/angular/standalone";
import {MiniMenuImgsComponent} from "../componentes/mini-menu-imgs/mini-menu-imgs.component";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-tarjeta-amigo-votacion',
  templateUrl: './tarjeta-amigo-votacion.component.html',
  styleUrls: ['./tarjeta-amigo-votacion.component.scss'],
  standalone: true,
    imports: [
        IonAvatar,
        IonCard,
        IonCardHeader,
        IonCardSubtitle,
        IonCardTitle,
        IonCol,
        IonGrid,
        IonRow,
        MiniMenuImgsComponent,
        IonButton,
        IonIcon,
        RouterLink,
        NgIf,
        IonCheckbox,
        FormsModule
    ]
})
export class TarjetaAmigoVotacionComponent  implements OnInit {
    @Input() persona: Persona = new Persona(0, 'Usuario X', 'https://picsum.photos/500/500?random=4')
    @Input() paraSeleccionar: boolean = false;
    @Input() paraSeleccionar2: boolean = false;

    constructor(private router: Router) {

    }

    ngOnInit() {
    }

    public setPersona(persona: Persona) {
        console.log(persona);
        this.persona = persona;
    }

    getColor() {
        if (this.persona.deuda === undefined) {
            return '#592e2e';
        }
        if (this.persona.deuda > 0) {
            return '#32592e';
        }
        if (this.persona.deuda < 0) {
            return '#592e2e';
        }
        return 'danger';
    }

    getMensaje() {
        if (this.persona.deuda === undefined) {
            return '';
        }
        if (this.persona.deuda > 0) {
            return 'Pagado';
        }
        if (this.persona.deuda < 0) {
            return 'Deben';
        }
        return 'Esta en paz';
    }

    cliqueado() {
        if (this.persona.seleccionado === null) {
            this.router.navigate(['/amigos/perfil']);
        } else {
            this.persona.seleccionado = !this.persona.seleccionado;
        }
    }
}
