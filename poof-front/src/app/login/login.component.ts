import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { LoginCredentials } from '../models/auth';
import { UserInfo } from "../models/user";
import { UserService } from "../user.service";
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from "@angular/material/snack-bar";

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

  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
  });

  constructor(
    private auth: AuthenticationService,
    private user: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  async loginUser() {

    await this.auth.login(this.loginForm.value.username, this.loginForm.value.password);
    console.log('test');
    if (this.auth.isValid()) {
      console.log('Valid token');
      this.openSnackBar('Success!', 'x');
    }
    else {
      console.log('Invalid token');
      this.openSnackBar('Try again', 'x');
    }
  }

  logoutUser(): void {
    this.auth.logout();
  }

  createUser(): void {
    const userData = new UserInfo();
    userData.username = this.userForm.value.username;
    userData.password = this.userForm.value.password;
    userData.email = this.userForm.value.email;
    userData.first_name = this.userForm.value.first_name;
    userData.last_name = this.userForm.value.last_name;

    this.user.userForm(userData.username, userData.password, userData.email, userData.first_name, userData.last_name).then()
      .catch(errors => console.log('Failure due to' + JSON.stringify(errors)));
    this.openSnackBar('User Created Successfully!', 'x');
    console.log('Invalid');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['snackbar']
    });
  }

  ngOnInit(): void {
  }

}
