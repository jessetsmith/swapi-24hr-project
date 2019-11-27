import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { People } from '../app/people'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private query: string;
  private peoplesUrl = 'https://swapi.co/api/people/?search=';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  // private searchParam = '?search='
  // private URL: string = this.peoplesUrl + this.searchParam;

  constructor(
    private _http: HttpClient
  ) { }

  getPeople(query) : Observable<People[]> {
    return this._http.get<People[]>(`${this.peoplesUrl}${query}`).pipe(
      tap(_ =>  data => console.log(data))
    );
  }


  // getPeople(query): Observable<People[]> {
  //   console.log(this.peoplesUrl)
  //   return this.http.get<People[]>(this.peoplesUrl) 
  // }

  //*Search Functionality*//
  // searchPeople(term: string): Observable<People[]> {
  //   if(!term.trim()) {
  //     //if not search term, return empty hero array. 
  //     return of ([]);
  //   }
  //     console.log(this.http.get<People[]>
  //       (`$this.peoplesUrl}/?search=${term}`));

  //     return this.http.get<People[]>
  //     (`${this.peoplesUrl}/?search=${term}`)
  //     }

}
