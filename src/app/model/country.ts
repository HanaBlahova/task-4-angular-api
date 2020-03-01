export interface Country {
        name: string,
        capital: string,
        altSpellings:Array<AltSpellings>,
        relevance: string,
        region: string,
        subregion: string,
        translations: Array<Translations>,
        population: number,
        latlng: Array<Latlng>,
        demony: string,
        area: number,
        gini: number,
        timezones: string,
        callingCodes: string,
        topLevelDomain: string,
        alpha2Code: string,
        alpha3Code: string,
        currencies: string,
        languages: Array<Languages>
    }


export interface AltSpellings {
    0: string,
    1: string 
}

export interface Translations {
    de: string,
    en: string,
    es: string,
    fr: string
}

export interface Latlng {
    0: number, 
    1: number
}

export interface Languages { 
    0: string,
    1: string,
    2: string
}
