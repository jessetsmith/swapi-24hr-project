import { Component, OnInit } from '@angular/core';
import { People } from '../people'
import { PeopleService } from '../people.service'

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: People[];

  constructor(private peopleService: PeopleService) { }

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




