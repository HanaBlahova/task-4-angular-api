import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/model/country';

@Component({
  selector: 'app-one-country',
  templateUrl: './one-country.component.html',
  styleUrls: ['./one-country.component.scss']
})
export class OneCountryComponent implements OnInit {


  @Input('data') country: Country;

  constructor() { }

  ngOnInit(): void {
  }

}
