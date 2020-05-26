import { Injectable } from '@angular/core';
import { JwtToken, LoginCredentials } from './models/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { error } from 'util';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  token: JwtToken;

  constructor(
    private http: HttpClient,
    private helper: JwtHelperService,
    private router: Router,
  ) {
    this.token = new JwtToken();
    this.token.access = localStorage.getItem('access_token');
    this.token.refresh = localStorage.getItem('refresh_token');
  }

  logout(): void {
    localStorage.setItem('access_token', null);
    localStorage.setItem('refresh_token', null);
    this.token = null;
  }

  login(username: string, password: string) {
    const loginData = new LoginCredentials(username, password);
    return this.getNewToken(loginData).then((token) => {
      this.token = token;
      localStorage.setItem('access_token', token.access);
      localStorage.setItem('refresh_token', token.refresh);
      console.log('Success!', token);
    }, err => {
      console.log('Failure:', err);
    });
  }

  getNewToken(loginData: LoginCredentials): Promise<JwtToken> {
    return this.http.post<JwtToken>(environment.apiUrl + '/token/', loginData).toPromise();
  }

  refreshToken(): void {
    const body = { refresh: this.getRefreshToken() };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post<any>(environment.apiUrl + '/refresh/', body, httpOptions)
      .subscribe(accessToken => {
        this.token.access = accessToken.access;
        localStorage.setItem('access_token', accessToken.access);
        console.log('token refreshed');
      }
      );
  }
/*
  tokenGetter(): string {

    if (this.isValid() && this.tokenExpiration() > 30)
      return this.getCurrToken();
    if (this.isValid()) {
      this.refreshToken();
      return this.getCurrToken();
    if ()
    }

      return localStorage.getItem('access_token');
  }
*/
  tokenExpiration(): number {
    const date: any = this.helper.getTokenExpirationDate(this.token.access);
    const now: any = Date.now();
    return ((date - now) / 1000);
  }

  isValid(): boolean {
    return !this.helper.isTokenExpired(this.getCurrToken());
  }

  getCurrToken(): string {
    return this.token.access;
  }

  getRefreshToken(): string {
    return this.token.refresh;
  }
}
