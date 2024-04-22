import { HostBinding, HostListener, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  words: string[] = ['HOGAR', 'NEGOCIO', 'EMPRESA'];
  wordWrapperContent: string = '';
  addingWord: boolean = false;
  counter: number = 0;

  constructor() { }

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

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'end' });
    }
  }

  //isOpen: boolean = false;
  @HostBinding('class.open') isOpen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Lógica para cambiar la clase basada en la resolución de pantalla
    if (window.innerWidth < 993) {
      this.isOpen = false; // abre el menú en dispositivos móviles
    } else {
      // muestra el menu horizontal en resoluciones mayores a 993px
       this.isOpen = true;
    }
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }




  
}
