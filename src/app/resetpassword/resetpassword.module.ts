import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetpasswordComponent } from './resetpassword.component';
import {
  MatToolbarModule, MatSlideToggleModule, MatButtonModule, MatGridListModule,
  MatListModule, MatIconModule,
  MatCardModule, MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';




@NgModule({
  declarations: [ResetpasswordComponent],
  imports: [
    CommonModule,
    MatToolbarModule, MatSlideToggleModule, MatButtonModule, MatGridListModule,
    MatListModule, MatIconModule,
    MatCardModule, MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  exports: [ResetpasswordComponent]
})
export class ResetpasswordModule { }
