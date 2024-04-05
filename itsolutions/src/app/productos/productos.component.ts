import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
 
  cards: Array<any> = [
    {
      title: 'VIDEO SEGURIDAD - CAMARAS',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dignissimos accusantium provident aperiam architecto minus.',
      img: '../../assets/img/img3.jpg',
    },

    {
      title: 'SEGURIDAD ELECTRONICA - ALARMAS',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dignissimos accusantium provident aperiam architecto minus.',
      img: '../../assets/img/img4.jpg',
    },

    {
      title: 'COMPUTACION - HARDWARE',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dignissimos accusantium provident aperiam architecto minus.',
      img: '../../assets/img/img5.jpg',
    },
  ];

  logosCctv: Array<any> = [
    {img: '../../assets/img/dahua-logo.png'},
    {img: '../../assets/img/ezviz-logo.png'},
    {img: '../../assets/img/hikvision-Logo.png'},
    {img: '../../assets/img/imou-logo.png'},
    {img: '../../assets/img/sky-logo.png'}
  ]

  logosAlarmas: Array<any> = [
    {img: '../../assets/img/marshall-logo.png'},
    {img: '../../assets/img/ezviz-logo.png'},
    {img: '../../assets/img/hikvision-Logo.png'},
  ]

  logosComputacion: Array<any> = [
    {img: '../../assets/img/amd-logo.png'},
    {img: '../../assets/img/intel-logo.png'},
    {img: '../../assets/img/kingston-logo.png'},
    {img: '../../assets/img/asrock-logo.png'},
    {img: '../../assets/img/cougar-logo.png'}
  ]
}
