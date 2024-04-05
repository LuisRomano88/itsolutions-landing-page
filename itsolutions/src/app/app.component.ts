import { Component, HostBinding } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'itsolutions';

  public slides = [
    { src: "../../assets/img/promo1.png" },
    { src: "../../assets/img/promo2.png" },
    { src: "../../assets/img/img3.jpg" },
    { src: "../../assets/img/img4.jpg" },
    { src: "../../assets/img/img6.png" }
  ];
}
