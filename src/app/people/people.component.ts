import { Component, OnInit } from '@angular/core';
import { People } from '../people'
import { PeopleService } from '../people.service'
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: any[];
  private searchTerms = new Subject<string>();
  peopleFound: boolean = false;

  handleSuccess(data){
    this.peopleFound = true;
    this.people = data.results;
    console.log(data.results);
  }

  handleError(error){
    console.log(error);
  }

  constructor(private _peopleService: PeopleService) { }

  searchQuery(query: string): void {
    this.searchTerms.next(query);
  }


  searchPeople(query: string){
    return this._peopleService.getPeople(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => console.log('Request Successful')

    )
  }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    this.peopleService.getPeople()
      .subscribe(
        (people => this.people = people)
      )
    }
}




