import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemecardsModule } from '../common/dashboard/themecards/themecards.module';
import { ResultComponent } from './result.component';
import { TilesModule } from '../common/dashboard/tiles/tiles.module';

import {
  MatFormFieldModule, MatSelectModule
} from '@angular/material';

@NgModule({
  declarations: [ResultComponent],
  imports: [
    CommonModule,
    ThemecardsModule,
    TilesModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [ResultComponent]
})
export class ResultModule { }
