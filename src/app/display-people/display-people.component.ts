import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-display-people',
  templateUrl: './display-people.component.html',
  styleUrls: ['./display-people.component.css']
})
export class DisplayPeopleComponent implements OnInit {
  displayPeople: FormGroup;
  public _people = {};
  useBtn = false;


  constructor(private fb: FormBuilder) {
    setTimeout(() => {
      this.useBtn = true;
    }, 3000);
   }

  ngOnInit() {
    this.displayPeople = this.fb.group({
      name: new FormControl(),
      gender: new FormControl(),
      homeworld: new FormControl(),
      films: new FormControl()
    })
  }

  @Input() set people(people: any) {
    this._people = people;
}

get people() : any {
  return this._people; 
}
}
