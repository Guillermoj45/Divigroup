import {Component, Input, OnInit} from '@angular/core';
import {
    IonAvatar,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCheckbox,
    IonCol,
    IonGrid,
    IonIcon,
    IonRow
} from "@ionic/angular/standalone";
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {Persona} from "../../modelos/Persona";
import {image} from "ionicons/icons";
import {FormsModule} from "@angular/forms";
import {MiniMenuImgsComponent} from "../../componentes/mini-menu-imgs/mini-menu-imgs.component";

@Component({
    selector: 'app-tarjeta-amigos',
    templateUrl: './tarjeta-amigos.component.html',
    styleUrls: ['./tarjeta-amigos.component.scss'],
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
export class TarjetaAmigosComponent implements OnInit {
    @Input() persona: Persona = new Persona(0, 'Usuario X', 'https://picsum.photos/500/500?random=4')
    @Input() seleccionado: boolean | null = null;
    protected readonly image = image;

    constructor(private router: Router) {

    }

    ngOnInit() {
        console.log(this.persona);
    }

    getColor() {
        if (this.persona.deuda === null) {
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
        if (this.persona.deuda === null) {
            return 'No se ha definido';
        }
        if (this.persona.deuda > 0) {
            return 'Pagado';
        }
        if (this.persona.deuda < 0) {
            return 'Deben';
        }
        return 'No se ha definido';
    }

    cliqueado() {
        if (this.seleccionado === null) {
            this.router.navigate(['/amigos/perfil']);
        } else {
            this.seleccionado = !this.seleccionado;
        }
    }
}
