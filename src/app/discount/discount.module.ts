import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountComponent } from './discount.component';
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
    MatCardModule, MatTabsModule
  ],
  declarations: [DiscountComponent],
  exports: [DiscountComponent]
})
export class DiscountModule { }
