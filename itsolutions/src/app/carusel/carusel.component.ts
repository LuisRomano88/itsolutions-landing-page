import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('1000ms ease-out', style({ transform: 'translateY(0%)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1000ms ease-in', style({ transform: 'translateY(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class CaruselComponent implements OnInit{

 /* public slides: Array<any> = [

    { src: "../../../assets/img/gif-home.gif" },
    { src: "../../../assets/img/gif-home-3.gif" },
    { src: "../../../assets/img/gif-home-4.gif" },
    { src: "../../../assets/img/gif-home-5.gif" },
  ];*/

  slides = [
    { image: "../../../assets/img/gif-home.gif", title: 'Slide 1' },
    { image: "../../../assets/img/gif-home-3.gif", title: 'Slide 2' },
    { image: "../../../assets/img/gif-home-5.gif", title: 'Slide 4' },
    { image: "../../../assets/img/gif-home-6.gif", title: 'Slide 5' },
    { image: "../../../assets/img/gif-home-7.gif", title: 'Slide 5' },
  ];

  currentSlide = 0;
  animationKey = 0;

  constructor() { }

  ngOnInit(): void {
    // Opcional: Cambiar de diapositiva automáticamente cada cierto tiempo
    setInterval(() => {
      this.nextSlide();
    }, 10000); // Cambia cada 10 segundos
  }

  selectSlide(index: number): void {
    this.currentSlide = index;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
  
}

