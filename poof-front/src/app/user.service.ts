import { Injectable } from '@angular/core';
import { UserInfo } from "./models/user";
import {JwtToken } from "./models/auth";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})

export class UserService {

    token: JwtToken;

  constructor(private http: HttpClient,
    private helper: JwtHelperService,
    private router: Router
  ) {
    this.token = new JwtToken();
    this.token.access = localStorage.getItem('access_token');
    this.token.refresh = localStorage.getItem('refresh_token');
  }

  createUser(userData: UserInfo): Observable<any> {
    return this.http.post<JwtToken>(environment.apiUrl + '/users/', userData);
  }

  async userForm(username: string, password: string, email: string, first_name: string, last_name: string,): Promise<any> {
    const userData = new UserInfo();
    userData.username = username;
    userData.password = password;
    userData.email = email;
    userData.first_name = first_name;
    userData.last_name = last_name;

    await this.createUser(userData).subscribe(
      user => {
        console.log('Successfully created the user!');
      });
  }
}
