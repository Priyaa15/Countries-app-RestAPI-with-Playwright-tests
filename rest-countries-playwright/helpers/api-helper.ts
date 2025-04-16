import { APIRequestContext } from '@playwright/test';

export class ApiHelper {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getAllCountries() {
    const response = await this.request.get('/all');
    return {
      status: response.status(),
      data: await response.json()
    };
  }

  async getCountryByName(name: string) {
    const response = await this.request.get(`/name/${name}`);
    return {
      status: response.status(),
      data: await response.json()
    };
  }

  async getCountryByCode(code: string) {
    const response = await this.request.get(`/alpha/${code}`);
    return {
      status: response.status(),
      data: await response.json()
    };
  }

  async getCountriesByRegion(region: string) {
    const response = await this.request.get(`/region/${region}`);
    return {
      status: response.status(),
      data: await response.json()
    };
  }

  async getCountriesBySubregion(subregion: string) {
    const response = await this.request.get(`/subregion/${subregion}`);
    return {
      status: response.status(),
      data: await response.json()
    };
  }

  async getCountriesByLanguage(language: string) {
    const response = await this.request.get(`/lang/${language}`);
    return {
      status: response.status(),
      data: await response.json()
    };
  }

  async getCountriesByCurrency(currency: string) {
    const response = await this.request.get(`/currency/${currency}`);
    return {
      status: response.status(),
      data: await response.json()
    };
  }

  async getCountriesByCapital(capital: string) {
    const response = await this.request.get(`/capital/${capital}`);
    return {
      status: response.status(),
      data: await response.json()
    };
  }
}