import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import {CompListComponent} from './comp-list/comp-list.component';
import {VacListComponent} from './vac-list/vac-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
  { path: 'companies', component: CompListComponent },
  { path: 'vacancies/:id', component: VacListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
