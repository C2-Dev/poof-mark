import { Component, OnInit } from '@angular/core';
import { FartService } from '../fart.service';
import { Fart } from '../fart';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {FartDialogComponent} from "../fart-dialog/fart-dialog.component";

@Component({
  selector: 'app-fart',
  templateUrl: './fart.component.html',
  styleUrls: ['./fart.component.css']
})

export class FartComponent implements OnInit {

  constructor(
    public fartService: FartService,
    private dialog: MatDialog
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

  openDialog(fart: object) {

        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = {
          fart: fart,
        };
        this.dialog.open(FartDialogComponent, dialogConfig);
    }

  clearFarts(): void {
    this.farts = [];
  }

  ngOnInit() {
    this.getFarts();
  }
}
