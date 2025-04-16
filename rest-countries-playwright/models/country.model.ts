export interface Currency {
    name: string;
    code: string;
    }

export interface Language {
    [key: string] : string;
    }

export interface Name{
    common: string;
    official: string;
    nativeName?:{
        [key: string]: {
            official : string
            common : string
        }

    };
}
export interface Country {
    name: Name;
    tld?: string[];
    cca2: string;
    ccn3?: string;
    cca3: string;
    cioc?: string;
    independent?: boolean;
    status: string;
    unMember: boolean;
    currencies?: {
      [key: string]: Currency;
    };
    capital?: string[];
    altSpellings: string[];
    region: string;
    subregion?: string;
    languages?: Language;
    translations: {
      [key: string]: {
        official: string;
        common: string;
      }
    };
    latlng: number[];
    landlocked: boolean;
    borders?: string[];
    area: number;
    flag: string;
    population: number;
    flags: {
      png: string;
      svg: string;
      alt?: string;
    };
  }