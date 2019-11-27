import { Component, OnInit } from '@angular/core';
import { Ship } from '../ship'
import { StarshipService } from '../ships.service'

@Component({
  selector: 'app-starship',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
  starship: Ship[];

  constructor(private starshipService: StarshipService) { }

  ngOnInit() {
    this.getStarship();
  }

  getStarship(): void {
    this.starshipService.getStarship()
      .subscribe(starship => this.starship = starship);
  }

}
