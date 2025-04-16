import { expect } from '@playwright/test';
import { Country } from '../models/country.model';

export class CountryAssertions {
  static assertValidCountry(country: Country): void {
    expect(country.name).toBeDefined();
    expect(country.name.common).toBeTruthy();
    expect(country.name.official).toBeTruthy();
    expect(country.cca2).toBeTruthy();
    expect(country.cca3).toBeTruthy();
    expect(country.region).toBeTruthy();
    expect(country.population).toBeGreaterThanOrEqual(0);
  }

  static assertCountriesInRegion(countries: Country[], region: string): void {
    for (const country of countries) {
      expect(country.region.toLowerCase()).toBe(region.toLowerCase());
    }
  }

  static assertCountriesWithCurrency(countries: Country[], currencyCode: string): void {
    for (const country of countries) {
      const hasCurrency = country.currencies && 
        Object.keys(country.currencies).some(code => code.toLowerCase() === currencyCode.toLowerCase());
      expect(hasCurrency).toBeTruthy();
    }
  }

  static assertCountriesWithLanguage(countries: Country[], languageCode: string): void {
    for (const country of countries) {
      const hasLanguage = country.languages && 
        Object.keys(country.languages).some(code => code.toLowerCase() === languageCode.toLowerCase());
      expect(hasLanguage).toBeTruthy();
    }
  }
}