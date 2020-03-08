import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Country } from 'src/app/model/country';
import { ProvideDataService } from 'src/app/service/provide-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  country: Country;
  transKeys: string[];

  constructor(
    private route: ActivatedRoute, 
    private provideDataService: ProvideDataService,
    private router: Router
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
        this.transKeys = Object.keys(this.country.translations);
      });
    }

    onCountries() {
      this.router.navigate(['/countries']);
    }
  }


