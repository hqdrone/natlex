import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChartsComponent} from "./components/charts/charts.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {path: '', redirectTo: "dashboard", pathMatch: 'full'},
  {path: 'charts', component: ChartsComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
