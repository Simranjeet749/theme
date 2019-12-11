import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {TilesDialogComponent} from '../../dialogs/tiles-dialog/tiles-dialog.component';



@Component({
  selector: 'td-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(TilesDialogComponent, dialogConfig);
  }
}
