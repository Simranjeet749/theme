import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesComponent } from '../tiles/tiles.component'
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

@NgModule({
  declarations: [TilesComponent],
  imports: [
    CommonModule,
    MatButtonModule, MatIconModule, MatToolbarModule, MatSlideToggleModule, MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule
  ],
  exports: [TilesComponent]
})
export class TilesModule { }
