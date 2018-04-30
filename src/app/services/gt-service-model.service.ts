import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { GtData } from '../models/gt-data';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GtServiceModelService {

  private gradientTableURL = 'http://localhost:3000/gradientData';  // URL to web api
  constructor(private http: HttpClient) { 
  }

  /** GET heroes from the server */
getHeroes (): Observable<GtData[]> {
  return this.http.get<GtData[]>(this.gradientTableURL)
}

/** POST: add a new hero to the server */
addHero (hero: GtData): Observable<GtData> {
  return this.http.post<GtData>(this.gradientTableURL, hero, httpOptions);
}

/** DELETE: delete the hero from the server */
deleteHero (hero: GtData | number): Observable<GtData> {
  const id = typeof hero === 'number' ? hero : hero.id;
  const url = `${this.gradientTableURL}/${id}`;

  return this.http.delete<GtData>(url, httpOptions);
  
}

}
