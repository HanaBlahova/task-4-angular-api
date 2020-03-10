import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import { Country } from '../model/country';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvideDataService {

  url = environment.api.url;

  constructor(private http:HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}/all`);
  }

  getCountry(name:string):Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}/name/${name}`);
  }
  
}
