import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubtsComponent } from './doubts.component'
import {
  MatToolbarModule, MatSlideToggleModule, MatButtonModule, MatGridListModule,
  MatListModule, MatIconModule,
  MatCardModule, MatTabsModule, MatFormFieldModule, MatSelectModule
} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion'; 

@NgModule({
  declarations: [DoubtsComponent],
  imports: [
    CommonModule,
    MatToolbarModule, MatSlideToggleModule, MatButtonModule, MatGridListModule,
    MatListModule, MatIconModule, MatFormFieldModule, MatSelectModule,
    MatCardModule, MatTabsModule, MatExpansionModule
  ],
  exports: [DoubtsComponent]
})
export class DoubtsModule { }
