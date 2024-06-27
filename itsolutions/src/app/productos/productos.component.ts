import { Component } from '@angular/core';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { Router } from '@angular/router';
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
  
  constructor(private router: Router){}

  irTienda(): void {
    this.router.navigate(['/tienda']); // Redirige a la ruta
  }
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
    {img: '../../assets/img/marshall-logo.png'},
  ]

  logosRedes: Array<any> = [
    
    {img: '../../assets/img/Furukawa-logo.png'},
    {img: '../../assets/img/cisco-logo.png'},
    {img: '../../assets/img/ubiquiti-logo.png'},
    {img: '../../assets/img/tp-link-logo.png'},
    {img: '../../assets/img/mikro-tik-logo.png'}
  ]

  logosComputacion: Array<any> = [
    {img: '../../assets/img/amd-logo.png'},
    {img: '../../assets/img/intel-logo.png'},
    {img: '../../assets/img/kingston-logo.png'},
    {img: '../../assets/img/asrock-logo.png'},
    {img: '../../assets/img/cougar-logo.png'}
  ]

  seccionProductos: Array<any> = [
    {img: '../../assets/img/producto1-removebg-preview.png'},
    {img: '../../assets/img/producto2-removebg-preview.png'},
    {img: '../../assets/img/producto3-removebg-preview.png'},
    {img: '../../assets/img/producto4-removebg-preview.png'},
    {img: '../../assets/img/producto5-removebg-preview.png'},
    {img: '../../assets/img/producto6-removebg-preview.png'}
  ]

}
