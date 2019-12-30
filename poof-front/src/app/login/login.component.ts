import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {LoginCredentials} from '../auth';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private auth: AuthenticationService,
    private  router: Router
  ) {
  }

  loginUser(): void {
    const loginData = new LoginCredentials();
    loginData.username = this.loginForm.value.username;
    loginData.password = this.loginForm.value.password;
    this.auth.login(loginData.username, loginData.password);

    if (this.auth.isValid()) {
      this.errorMessage = 'token valid';
    } else {
      this.errorMessage = 'token invalid';
    }
  }

  ngOnInit() {
  }

}