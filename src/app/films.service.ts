import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {Films} from './films'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { People } from '../app/people'

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private filmsUrl = 'https://swapi.co/api/films/'

  constructor(private http: HttpClient) { }


getFilms (): Observable<Films[]>{
  console.log(this.filmsUrl)
  return this.http.get<Films[]>(this.filmsUrl)
}

//*Search Functionality**/
searchFilms(term: string): Observable<Films[]> {
  if(!term.trim()) {
    //if not search term, return empty hero array. 
    return of ([]);
  }
    return this.http.get<Films[]>
    (`${this.filmsUrl}/?search=${term}`)
}
}


