import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { SortingComponent } from '../app/sorting/sorting.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { DiscountComponent } from '../app/discount/discount.component';
import { ResultComponent } from '../app/result/result.component'
import { DoubtsComponent } from '../app/doubts/doubts.component'


const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'sorting', component: SortingComponent, data: { title: 'sorting' } },
  { path: 'discount', component: DiscountComponent },
  { path: 'results', component: ResultComponent },
  { path: 'doubt', component: DoubtsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
