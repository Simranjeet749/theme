import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesDialogComponent } from './tiles-dialog.component';
import {
  MatButtonModule, MatIconModule, MatToolbarModule, MatSlideToggleModule, MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatCardModule,
  MatTableModule
} from '@angular/material';


@NgModule({
  declarations: [TilesDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule, MatIconModule, MatToolbarModule, MatSlideToggleModule, MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule
  ],
  exports: [TilesDialogComponent]
})
export class TilesDialogModule { }
