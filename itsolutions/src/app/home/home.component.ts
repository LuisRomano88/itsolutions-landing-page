import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  words: string[] = ['EMPRESA','NEGOCIO','HOGAR'];
  wordWrapperContent: string = '';
  addingWord: boolean = false;
  counter: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      if (this.wordWrapperContent.length > 0 && !this.addingWord) {
        this.wordWrapperContent = this.wordWrapperContent.slice(0, -1);
      } else {
        this.addingWord = true;
      }

      if (this.addingWord) {
        if (this.wordWrapperContent.length < this.words[this.counter].length) {
          this.wordWrapperContent = this.words[this.counter].slice(0, this.wordWrapperContent.length + 1);
        } else {
          if (this.counter < this.words.length - 1) {
            this.counter++;
          } else {
            this.counter = 0;
          }
          this.addingWord = false;
        }
      }
    }, 250);
  }

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


}
