import { Injectable } from '@angular/core';
import { JwtToken, LoginCredentials } from './auth';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  token: JwtToken;

  constructor(
    private http: HttpClient,
    private helper: JwtHelperService,
    private router: Router
  ) {
    this.token = new JwtToken();
    this.token.access = localStorage.getItem('access_token');
    this.token.refresh = localStorage.getItem('refresh_token');
  }

  login(username: string, password: string): void {
    const loginData = new LoginCredentials();
    loginData.username = username;
    loginData.password = password;
    this.getNewToken(loginData);
  }

  getNewToken(loginData: LoginCredentials): void {
    this.http.post<JwtToken>(environment.apiUrl + '/token/', loginData).
    subscribe(
      token => {
        this.token = token;
        localStorage.setItem('access_token', token.access);
        localStorage.setItem('refresh_token', token.refresh);
        console.log('Got the token fart face!');
      });
  }

  isValid(): boolean {
    return this.helper.isTokenExpired(this.getCurrToken());
  }

  getCurrToken(): string {
    return this.token.access;
  }
}
