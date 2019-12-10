import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ThemecardsComponent } from '../themecards/themecards.component';


@Component({
  selector: 'td-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open( ThemecardsComponent,dialogConfig);
  }
}
