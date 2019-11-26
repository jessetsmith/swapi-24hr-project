import { Component, OnInit } from '@angular/core';
import { People } from '../people';
import { PeopleService } from '../people.service';
import { Films } from '../films';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  people: People[] = [];
  films: Films[]= [];

  constructor(private peopleService: PeopleService, private filmsService: FilmsService) { }

  ngOnInit() {
    this.getPeople();
    this.getFilms();
  }

  getPeople(): void {
    this.peopleService.getPeople()
      .subscribe(people => this.people = people.slice(1, 5));
  }

  getFilms(): void {
    this.filmsService.getFilms()
      .subscribe(films => this.films = films.slice(1,5));
  }
}