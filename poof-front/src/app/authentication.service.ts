import { Injectable } from '@angular/core';
import { JwtToken, LoginCredentials } from './auth';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

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
    this.token.refresh = localStorage.getItem('refesh_token');
  }

}
