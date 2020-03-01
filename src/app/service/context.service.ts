import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
    providedIn: 'root'
})

export class ContextService {

    countries$: BehaviorSubject<Country[]> = new BehaviorSubject([]);

    constructor() {}

}

