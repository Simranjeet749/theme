import { NgModule } from '@angular/core';
import {
  MatToolbarModule, MatSlideToggleModule, MatButtonModule, MatGridListModule,
  MatListModule, MatIconModule,
  MatCardModule, MatTabsModule, MatMenuModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
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
