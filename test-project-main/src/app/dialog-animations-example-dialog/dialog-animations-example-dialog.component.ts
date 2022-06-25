import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { JSONDataService } from '../json-data.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.component.html',
  styleUrls: ['./dialog-animations-example-dialog.component.css']
})
export class DialogAnimationsExampleDialogComponent {

  investmentAmount: number = 0;

  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialogComponent>,
              private jsonDataService: JSONDataService,
              @Inject(MAT_DIALOG_DATA) public data: any,) { }

  millisecondsToTimeRemaining(milliseconds: any) {
    let year,
        month,
        day,
        hour,
        minute,
        second;
  
    second = Math.floor(milliseconds / 1000);
    minute = Math.floor(second / 60);
    second = second % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    month = Math.floor(day / 30);
    day = day % 30;
    year = Math.floor(month / 12);
    month = month % 12;
  
    return(`${year}yy ${month}mm ${day}days ${hour}:${minute}min`)
  }
}
