import {Component, OnInit} from '@angular/core';
import {
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonFooter,
    IonGrid,
    IonHeader,
    IonIcon,
    IonRouterLink,
    IonRow,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonTitle,
    IonToolbar
} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {addOutline, document, people, person} from "ionicons/icons";
import {Router, RouterModule} from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [
        IonButton,
        IonButtons,
        IonFooter,
        IonIcon,
        IonToolbar,
        IonGrid,
        IonCol,
        IonRow,
        IonRouterLink,
        RouterModule,
        IonTabs,
        IonHeader,
        IonTitle,
        IonContent,
        IonTabBar,
        IonTabButton
    ]
})
export class FooterComponent implements OnInit {

    constructor(private router: Router) {
        addIcons({'add-outline': addOutline, 'document': document, 'people': people, 'person': person});
    }


    ngOnInit() {
    }

    home(){
        this.router.navigate(['/home']);
    }
    amigos(){
        this.router.navigate(['/amigos']);
    }
    perfil(){
        this.router.navigate(['/perfil']);
    }
}
