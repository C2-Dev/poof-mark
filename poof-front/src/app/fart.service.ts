import { Injectable } from '@angular/core';
import { Fart, FartType } from './fart';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FartService {

  getFarts(): Observable<Fart[]> {
    return this.http.get<Fart[]>(environment.apiUrl + '/farts/');
  }

  getFartTypes(): Observable<FartType[]> {
    return this.http.get<FartType[]>(environment.apiUrl + '/type/');
  }

  constructor(private http: HttpClient) { }
}
