import { Component, OnInit } from '@angular/core';
import { FartService } from '../services/fart.service';
import { Fart } from '../models/fart';
import {FartDialogComponent} from "../fart-dialog/fart-dialog.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-fart',
  templateUrl: './fart.component.html',
  styleUrls: ['./fart.component.css']
})

export class FartComponent implements OnInit {

  constructor(
    public fartService: FartService,
    private dialog: MatDialog,) { }

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

  openDialog(fart: Fart) {
    const dialogConfig = new MatDialogConfig();
        dialogConfig.panelClass = 'no-padding-fart-dialog'
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
