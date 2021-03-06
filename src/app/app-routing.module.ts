import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { FilmsComponent } from './films/films.component';
import { ShipsComponent } from './ships/ships.component';

const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'films', component: FilmsComponent },

  { path: '', redirectTo: '/films', pathMatch: 'full' },

  { path: 'ships', component: ShipsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
