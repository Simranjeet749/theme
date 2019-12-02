import { NgModule } from '@angular/core';
import {
  MatToolbarModule, MatSlideToggleModule, MatButtonModule, MatGridListModule,
  MatListModule, MatIconModule,
  MatCardModule, MatTabsModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
