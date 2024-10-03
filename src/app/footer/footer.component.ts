import { Component, OnInit } from '@angular/core';
import {IonButton, IonButtons, IonFooter, IonIcon, IonToolbar} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {addOutline, document} from "ionicons/icons";

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
        IonToolbar
    ]
})
export class FooterComponent  implements OnInit {

  constructor() {
    addIcons({'add-outline': addOutline, 'document': document});
  }

  ngOnInit() {}

}
