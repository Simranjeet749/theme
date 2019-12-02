import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatCardModule,
  MatTableModule
} from "@angular/material";

@Component({
  selector: 'td-themecards',
  templateUrl: './themecards.component.html',
  styleUrls: ['./themecards.component.scss']
})
export class ThemecardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
