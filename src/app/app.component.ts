import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import { People } from './people';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'SWAPI 24!=7';

  constructor(private peopleService: PeopleService) {

  }

  // peopleResults: People[];

  // ngOnInit() {
  //   this.peopleService.getPeople()
  //   .subscribe
  //   (
  //     results => {
  //       this.peopleResults = results;
  //     }
  //   );
  // }
}
