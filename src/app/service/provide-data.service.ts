import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class ProvideDataService {

  constructor(private http:HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries-v1.p.rapidapi.com/all');
  }

  getCountry(name:string):Observable<Country[]> {
    return this.http.get<Country[]>(`https://restcountries-v1.p.rapidapi.com/name/${name}`);
  }
  
}
