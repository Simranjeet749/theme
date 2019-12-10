import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountComponent } from './discount.component';
import { TilesModule } from '../common/dashboard/tiles/tiles.module';
import {
  MatToolbarModule, MatSlideToggleModule, MatButtonModule, MatGridListModule,
  MatListModule, MatIconModule,
  MatCardModule, MatTabsModule
} from '@angular/material';




@NgModule({

  imports: [
    CommonModule,
    MatToolbarModule, MatSlideToggleModule, MatButtonModule, MatGridListModule,
    MatListModule, MatIconModule,
    MatCardModule, MatTabsModule,TilesModule
  ],
  declarations: [DiscountComponent],
  exports: [DiscountComponent]
})
export class DiscountModule { }
