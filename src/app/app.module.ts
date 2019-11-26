import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleComponent } from './people/people.component';
import { ShipsComponent } from './ships/ships.component';
import { FilmsComponent } from './films/films.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    ShipsComponent,
    FilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
