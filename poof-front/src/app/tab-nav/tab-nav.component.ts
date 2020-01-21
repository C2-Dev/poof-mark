import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.css']
})
export class TabNavComponent implements OnInit {

  links = ['Profile', 'Home', 'Map'];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit() {

  }

}
