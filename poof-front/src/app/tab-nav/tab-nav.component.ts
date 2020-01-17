import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.css']
})
export class TabNavComponent implements OnInit {

  links = ['Profile', 'Home', 'Map'];
  quotes = ['The more you toot the better you feel!', 'Better out than in, I always say!']
  quote: string;
  activeLink = this.links[0];

  constructor() { }

  ngOnInit() {
    this.quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];

  }

}
