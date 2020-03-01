import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Country } from 'src/app/model/country';
import { ProvideDataService } from 'src/app/service/provide-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  country: Country;


  constructor(
    private route: ActivatedRoute, 
    private provideDataService: ProvideDataService
    ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: any) => {
        if(params.name) {
          return this.provideDataService.getCountry(params.name);
        }
        return of(null);
      })).subscribe((countries: Country[]) => {
        console.log(countries);
        this.country = countries[0];
      });
    }
  }


