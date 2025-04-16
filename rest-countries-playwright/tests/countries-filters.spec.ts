import { test, expect } from '@playwright/test';
import { ApiHelper } from '../helpers/api-helper';
import { Country } from '../models/country.model';
import { TestDataHelper } from '../helpers/test-data-helper';
import { CountryAssertions } from '../utilities/assertions';

test.describe('Country API Filter Tests', () => {
  let apiHelper: ApiHelper;

  test.beforeEach(({ request }) => {
    apiHelper = new ApiHelper(request);
  });

  for (const region of TestDataHelper.regions.slice(0, 2)) {
    test(`should get countries by region: ${region}`, async () => {
      const response = await apiHelper.getCountriesByRegion(region);
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBeTruthy();
      expect(response.data.length).toBeGreaterThan(0);
      
      CountryAssertions.assertCountriesInRegion(response.data, region);
    });
  }

  for (const subregion of TestDataHelper.subregions.slice(0, 2)) {
    test(`should get countries by subregion: ${subregion}`, async () => {
      const response = await apiHelper.getCountriesBySubregion(subregion);
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBeTruthy();
      expect(response.data.length).toBeGreaterThan(0);
      
      const countries = response.data as Country[];
      for (const country of countries) {
        expect(country.subregion?.toLowerCase()).toBe(subregion.toLowerCase());
      }
    });
  }

  for (const currency of TestDataHelper.currencies.slice(0, 2)) {
    test(`should get countries by currency: ${currency}`, async () => {
      const response = await apiHelper.getCountriesByCurrency(currency);
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBeTruthy();
      
      CountryAssertions.assertCountriesWithCurrency(response.data, currency);
    });
  }

  for (const language of TestDataHelper.languages.slice(0, 2)) {
    test(`should get countries by language: ${language}`, async () => {
      const response = await apiHelper.getCountriesByLanguage(language);
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBeTruthy();
      
      CountryAssertions.assertCountriesWithLanguage(response.data, language);
    });
  }
});