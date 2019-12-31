import { Component, OnInit } from '@angular/core';
import { FartService } from '../fart.service';
import {Fart, FartType} from '../fart';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fart',
  templateUrl: './fart.component.html',
  styleUrls: ['./fart.component.css']
})

export class FartComponent implements OnInit {

  constructor(
    public fartService: FartService
  ) { }

  farts: Fart[];
  fart_types: FartType[];

  getFarts(): void {
    this.fartService.getFarts().
      subscribe(
        farts => {
          this.farts = farts;
          console.log('Fetched farts!');
        }
      );
  }


  clearFarts(): void {
    this.farts = [];
  }

  getFartTypes(): void {
    this.fartService.getFartTypes().
      subscribe(
        fart_types => {
          this.fart_types = fart_types;
          console.log('Fetched fart types!');
        }
      );
  }


  clearFartTypes(): void {
    this.fart_types = [];
  }

  ngOnInit() {
  }
}
