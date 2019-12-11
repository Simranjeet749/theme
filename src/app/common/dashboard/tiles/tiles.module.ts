import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesComponent } from '../tiles/tiles.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ThemecardsModule } from '../themecards/themecards.module';
import { ThemecardsComponent } from '../themecards/themecards.component';
import { TilesDialogComponent } from '../../dialogs/tiles-dialog/tiles-dialog.component';


import {
  MatButtonModule, MatIconModule, MatToolbarModule, MatSlideToggleModule, MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatCardModule,
  MatTableModule
} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { from } from 'rxjs';

@NgModule({
  declarations: [TilesComponent],
  imports: [
    ThemecardsModule,
    CommonModule,
    MatButtonModule, MatIconModule, MatToolbarModule, MatSlideToggleModule, MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule
  ],
  exports: [TilesComponent],
  entryComponents: [TilesDialogComponent]

})
export class TilesModule { }
