import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PeopleService } from '../people.service'
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-films-search',
  templateUrl: './films-search.component.html',
  styleUrls: ['./films-search.component.css']
})
export class FilmsSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
