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
  private allPeoplesUrl = 'https://swapi.co/api/people/';
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
  
  getAllPeople (): Observable<People[]> {
    console.log(this.allPeoplesUrl)
    return this._http.get<People[]>(this.allPeoplesUrl)
    .pipe(map(result=>result['results']))
  }
}

