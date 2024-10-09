import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IonicModule} from "@ionic/angular";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-amigo',
  templateUrl: './amigo.component.html',
  styleUrls: ['./amigo.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FooterComponent
  ]
})
export class AmigoComponent  implements OnInit {
  foto = 'https://www.w3schools.com/howto/img_avatar.png';

  constructor() {}

  ngOnInit() {}

}
