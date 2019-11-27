import { Component, OnInit } from '@angular/core';
import { Ship } from '../ship'
import { starshipService } from '../ships.service'

@Component({
  selector: 'app-starship',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
  ship: Ship[];

  constructor(private starshipService: starshipService) { }

  ngOnInit() {
    this.getStarship();
  }

  getStarship(): void {
    this.starshipService.getStarship()
      .subscribe(ship => this.ship = ship);
  }

}
