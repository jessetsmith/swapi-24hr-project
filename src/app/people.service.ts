import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { People } from '../app/people'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private peoplesUrl = 'https://swapi.co/api/people/';

  constructor(
    private http: HttpClient,
  ) { }

  getPeople (): Observable<People[]> {
    console.log(this.peoplesUrl)
    return this.http.get<People[]>(this.peoplesUrl) 
  }

  //*Search Functionality*//
  searchPeople(term: string): Observable<People[]> {
    if(!term.trim()) {
      //if not search term, return empty hero array. 
      return of ([]);
    }
      // console.log(this.http.get<People[]>
      //   (`$this.peoplesUrl}/?search=${term}`))
      return this.http.get<People[]>
      (`${this.peoplesUrl}/?search=${term}`)
      }

}
