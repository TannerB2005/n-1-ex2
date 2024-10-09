import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
[x: string]: any;

title: string = "blahblahblah"
  content: string = "lorem ipsim"
  isTechRelated: boolean = true;
  
    toggleStyle() {
      this.isTechRelated = !this.isTechRelated
    }
  constructor() { }

  ngOnInit() {
  }

}
