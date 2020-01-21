import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-fart-dialog',
  templateUrl: './fart-dialog.component.html',
  styleUrls: ['./fart-dialog.component.css']
})
export class FartDialogComponent implements OnInit {

  fart: any;

  constructor(
    private dialogRef: MatDialogRef<FartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.fart = data.fart;
  }

  ngOnInit() {
  }

}
