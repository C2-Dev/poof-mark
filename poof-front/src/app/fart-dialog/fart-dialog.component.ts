import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig} from "@angular/material";
import {Fart} from "../fart";

@Component({
  selector: 'app-fart-dialog',
  templateUrl: './fart-dialog.component.html',
  styleUrls: ['./fart-dialog.component.css']
})
export class FartDialogComponent implements OnInit {

  fart: Fart;
  lat: number;
  lon: number;

  constructor(
    private dialogRef: MatDialogRef<FartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.fart = data.fart;
    this.lat = data.fart.lat;
    this.lon = data.fart.lon;

  }

  ngOnInit() {
  }

}
