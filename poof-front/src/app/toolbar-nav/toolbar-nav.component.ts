import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-nav',
  templateUrl: './toolbar-nav.component.html',
  styleUrls: ['./toolbar-nav.component.css']
})
export class ToolbarNavComponent implements OnInit {
  title = 'Fard.io';
  quotes = ['The more you toot the better you feel!', 'Better out than in, I always say!']
  quote: string;

  constructor() { }

  ngOnInit() {
    this.quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];

  }

}
