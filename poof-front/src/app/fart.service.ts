import { Injectable } from '@angular/core';
import { Fart } from './fart';
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

  constructor(private http: HttpClient) { }
}
