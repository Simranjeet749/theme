import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../dashboard/dashboard.module';
import { SortingComponent } from '../sorting/sorting.component';
import { ThemecardsModule } from '../common/dashboard/themecards/themecards.module'
import {
  MatToolbarModule, MatSlideToggleModule, MatButtonModule, MatGridListModule,
  MatListModule, MatIconModule,
  MatCardModule, MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    ThemecardsModule,
    MatToolbarModule, MatSlideToggleModule, MatButtonModule, MatGridListModule,
    MatListModule, MatIconModule,
    MatCardModule, MatTabsModule
  ],
  declarations: [SortingComponent],
  exports: [
    SortingComponent
  ]
})
export class SortingModule { }
