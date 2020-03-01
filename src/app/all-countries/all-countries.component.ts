import { Component, OnInit } from '@angular/core';
import { ProvideDataService } from '../service/provide-data.service';
import { Country } from '../model/country';
import { Observable } from 'rxjs';
import { ContextService } from '../service/context.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent implements OnInit {

  countries$: Observable<Country[]> = this.contextService.countries$;


  constructor(
    private provideDataService: ProvideDataService,
    private contextService: ContextService) { }

  ngOnInit(): void {
    this.provideDataService.getCountries().subscribe((countries: Country[]) => this.contextService.countries$.next(countries));
  }

}
