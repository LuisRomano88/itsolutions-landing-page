import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  words: string[] = [''];
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
}
