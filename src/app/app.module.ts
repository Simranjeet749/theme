import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoreModule } from './core/core.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { DiscountModule } from './discount/discount.module'
import { FooterModule } from './footer/footer.module'
import { DashboardModule } from './dashboard/dashboard.module';
import { ThemecardsModule } from './common/dashboard/themecards/themecards.module';
import { SortingModule } from './sorting/sorting.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from '../app/app-routing.module';
import { ResultModule } from '../app/result/result.module';
import { TilesModule } from './common/dashboard/tiles/tiles.module';
import { DoubtsModule } from './doubts/doubts.module'
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
} from '@angular/material';





@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    TilesModule,
    MatIconModule,
    CarouselModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    DoubtsModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    CoreModule,
    ToolbarModule,
    DiscountModule,
    FooterModule,
    DashboardModule,
    ThemecardsModule,
    SortingModule,
    MatTabsModule,
    AppRoutingModule,
    ResultModule

  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
