import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { People } from '../people'
import { PeopleService } from '../people.service'
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-swapi-search',
  templateUrl: './swapi-search.component.html',
  styleUrls: ['./swapi-search.component.css']
})
export class SwapiSearchComponent implements OnInit {
  peoples$: Observable<People[]>;
  private searchTerms = new Subject<string>();

  constructor(private peopleService: PeopleService) { }
  // Push a search term into the observable stream.

  search(term: string): void {
    this.searchTerms.next(term);
  }





  ngOnInit(): void { 
    // this.peoples$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(300),

    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),

    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.peopleService.searchPeople(term)),
    // );
  }

}
