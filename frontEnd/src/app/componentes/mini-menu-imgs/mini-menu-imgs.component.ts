import {Component, Input, OnInit} from '@angular/core';
import {IonAvatar} from "@ionic/angular/standalone";
import {NgForOf, NgIf} from "@angular/common";
import {image} from "ionicons/icons";

@Component({
    selector: 'app-mini-menu-imgs',
    templateUrl: './mini-menu-imgs.component.html',
    styleUrls: ['./mini-menu-imgs.component.scss'],
    standalone: true,
    imports: [
        IonAvatar,
        NgForOf,
        NgIf
    ]
})
export class MiniMenuImgsComponent  implements OnInit {

    protected imagenesDatos: string[] = [];
    imagenesMostrar: string[] = [];

    @Input()
    set imagenes(imagenes: string[]){
        this.imagenesDatos = imagenes;
        this.onImagenesChange();
    }

  constructor() { }

  ngOnInit() {
      this.onImagenesChange()
  }
    onImagenesChange() {
        this.imagenesMostrar = [];
        let numero = 0;
        if (this.imagenesDatos.length == 0) {
            this.imagenesMostrar.push("https://picsum.photos/80/80?random=1");
            this.imagenesMostrar.push("https://picsum.photos/80/80?random=2");
            this.imagenesMostrar.push("https://picsum.photos/80/80?random=3");
            this.imagenesMostrar.push("https://picsum.photos/80/80?random=4");
        }
        for (let imagen of this.imagenesDatos) {
            numero++;
            this.imagenesMostrar.push(imagen);
            if (numero > 4) {
                break;
            }
        }
    }

    protected readonly image = image;
}
