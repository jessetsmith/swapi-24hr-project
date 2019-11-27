import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleComponent } from './people/people.component';
import { ShipsComponent } from './ships/ships.component';
import { FilmsComponent } from './films/films.component';
import { SwapiSearchComponent } from './swapi-search/swapi-search.component';
import { PeopleService } from './people.service';
import { FilmsSearchComponent } from './films-search/films-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    ShipsComponent,
    FilmsComponent,
    SwapiSearchComponent,
    FilmsSearchComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatButtonModule
    
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
