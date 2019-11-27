import { Component, OnInit } from '@angular/core';
import { Films } from '../films'
import { FilmsService } from '../films.service'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: Films[];

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.getFilms();
  }

  getFilms(): void {
    this.filmsService.getFilms()
      .subscribe(films => this.films = films);
  }
}
