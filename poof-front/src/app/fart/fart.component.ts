import { Component, OnInit } from '@angular/core';
import { FartService } from '../fart.service';
import { Fart } from '../fart';
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

  ngOnInit() {
  }
}
