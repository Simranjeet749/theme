import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TilesComponent } from '../common/dashboard/tiles/tiles.component';

@Component({
  selector: 'td-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(TilesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


