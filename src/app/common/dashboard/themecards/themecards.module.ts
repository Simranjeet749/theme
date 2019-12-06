import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemecardsComponent } from '../themecards/themecards.component';

import {
  MatButtonModule, MatIconModule, MatToolbarModule, MatSlideToggleModule, MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatCardModule,
  MatTableModule
} from '@angular/material';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [ThemecardsComponent],
  imports: [
    CommonModule,
    CarouselModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatSidenavModule,

    MatTableModule
  ],
  exports: [ThemecardsComponent]
})
export class ThemecardsModule { }
