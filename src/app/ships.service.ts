import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Ship } from '../app/ship'

@Injectable({
  providedIn: 'root'
})
export class starshipService {
  private starshipUrl = 'https://swapi.co/api/starships/';

  constructor(
    private http: HttpClient,
  ) { }

  getStarship (): Observable<Ship[]> {
    console.log(this.starshipUrl)
    return this.http.get<Ship[]>(this.starshipUrl) 
}}