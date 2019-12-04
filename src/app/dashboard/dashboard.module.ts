import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatSlideToggleModule } from '@angular/material';
import { DashboardComponent } from './dashboard.component';
import { TileComponent } from './tile/tile.component';
import { ThemeService } from '../core/services/theme.service';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ThemecardsComponent } from './themecards/themecards.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatCardModule,
  MatTableModule
} from "@angular/material";
import { ThemeSliderComponent } from './theme-slider/theme-slider.component';
import { CategorySliderComponent } from './category-slider/category-slider.component';


@NgModule({
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
  declarations: [DashboardComponent, TileComponent, SliderComponent, ThemecardsComponent, ThemeSliderComponent, CategorySliderComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
