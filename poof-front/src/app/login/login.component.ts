import {Component, Input, OnInit} from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {LoginCredentials} from '../auth';
import {Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });

  constructor(
    private auth: AuthenticationService,
    private  router: Router
  ) { }

  loginUser(): void {
    this.auth.login(this.loginForm.value.username, this.loginForm.value.password);
  }


  ngOnInit() {
  }

}
