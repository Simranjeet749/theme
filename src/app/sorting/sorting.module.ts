import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../dashboard/dashboard.module';
import { SortingComponent } from '../sorting/sorting.component';
import { ThemecardsModule } from '../common/dashboard/themecards/themecards.module';
import { TilesModule } from '../common/dashboard/tiles/tiles.module';
import {
  MatToolbarModule, MatSlideToggleModule, MatButtonModule, MatGridListModule,
  MatListModule, MatIconModule,
  MatCardModule, MatTabsModule, MatFormFieldModule, MatSelectModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    ThemecardsModule,
    MatToolbarModule, MatSlideToggleModule, MatButtonModule, MatGridListModule,
    MatListModule, MatIconModule, TilesModule,
    MatCardModule, MatTabsModule, MatFormFieldModule, MatSelectModule,
  ],
  declarations: [SortingComponent],
  exports: [
    SortingComponent
  ]
})
export class SortingModule { }
