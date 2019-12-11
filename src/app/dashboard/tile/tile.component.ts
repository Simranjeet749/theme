import { Component, OnInit } from '@angular/core';
import { ThemecardsComponent } from '../themecards/themecards.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";


@Component({
  selector: 'td-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }


  openDialog() {

    const dialogConfig = new MatDialogConfig();


    const dialogRef = this.dialog.open(ThemecardsComponent,
      dialogConfig);

  }
}
