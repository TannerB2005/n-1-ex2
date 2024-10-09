import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basics-in-class-exercise-two';
  content: string = "lorem"
  isTechRelated: boolean = true;
  h1Styles: any = {};

  constructor() {
    this.setH1Styles();
  }

  setH1Styles() {
    this.h1Styles = {
      'color': this.isTechRelated ? 'blue' : 'yellow'
    };
  }
}