import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component'
import {
  MatToolbarModule, MatSlideToggleModule, MatButtonModule, MatGridListModule,
  MatListModule, MatIconModule,
  MatCardModule, MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
} from '@angular/material';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatToolbarModule, MatSlideToggleModule, MatButtonModule, MatGridListModule,
    MatListModule, MatIconModule,
    MatCardModule, MatTabsModule, MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
