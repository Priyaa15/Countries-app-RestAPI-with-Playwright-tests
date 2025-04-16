import { test, expect } from '@playwright/test';
import { ApiHelper } from '../helpers/api-helper';
import { Country } from '../models/country.model';
import { TestDataHelper } from '../helpers/test-data-helper';
import { CountryAssertions } from '../utilities/assertions';

test.describe('Basic Country API Tests', () => {
  let apiHelper: ApiHelper;

  test.beforeEach(({ request }) => {
    apiHelper = new ApiHelper(request);
  });

  test('should get all countries', async () => {
    const response = await apiHelper.getAllCountries();
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBeTruthy();
    expect(response.data.length).toBeGreaterThan(0);
    
    // Verify the first country has required fields
    CountryAssertions.assertValidCountry(response.data[0]);
  });

  for (const countryName of TestDataHelper.countryNames.slice(0, 3)) {
    test(`should get country by name: ${countryName}`, async () => {
      const response = await apiHelper.getCountryByName(countryName);
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBeTruthy();
      expect(response.data.length).toBeGreaterThan(0);
      
      const countryData = response.data[0] as Country;
      CountryAssertions.assertValidCountry(countryData);
      expect(countryData.name.common.toLowerCase()).toContain(countryName.toLowerCase());
    });
  }

  for (const countryCode of TestDataHelper.countryCodes.slice(0, 3)) {
    test(`should get country by code: ${countryCode}`, async () => {
      const response = await apiHelper.getCountryByCode(countryCode);
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBeTruthy();
      
      const countryData = response.data[0] as Country;
      CountryAssertions.assertValidCountry(countryData);
      expect(countryData.cca2).toBe(countryCode);
    });
  }
});