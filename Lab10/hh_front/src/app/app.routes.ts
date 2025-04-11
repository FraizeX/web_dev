import { Routes } from '@angular/router';
import {CompListComponent} from './comp-list/comp-list.component';
import {VacListComponent} from './vac-list/vac-list.component';

export const routes: Routes = [

  { path: 'companies', component: CompListComponent },
  { path: 'companies/:id/vacancies', component: VacListComponent }
];

