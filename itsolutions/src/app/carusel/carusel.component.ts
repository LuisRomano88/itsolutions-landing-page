import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0.1 }),
        animate('1000ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('1000ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CaruselComponent implements OnInit{

  public slides: Array<any> = [
    { src: "../../assets/img/promo5.png" },
    { src: "../../assets/img/promo6.png" },
    { src: "../../assets/img/promo7.png" },
    { src: "../../assets/img/img3.jpg" },
    { src: "../../assets/img/img4.jpg" },
    { src: "../../assets/img/img6.png" }
  ];

  //@Input() slides: any;
  currentSlide = 0;

  constructor(){}
  ngOnInit(): void {

  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }
}

