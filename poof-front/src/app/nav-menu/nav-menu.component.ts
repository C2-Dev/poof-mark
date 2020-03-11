import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(private auth: AuthenticationService) {  }

  ngOnInit() {
    this.auth.refreshToken();
  }
}
