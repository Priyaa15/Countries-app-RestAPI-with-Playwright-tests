export class TestDataHelper {
  // Sample data for testing
  static get regions(): string[] {
    return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  }

  static get subregions(): string[] {
    return ['Northern Europe', 'Western Europe', 'Southern Europe', 'Eastern Europe', 
            'Northern Africa', 'Western Africa', 'Southern Africa', 'Eastern Africa',
            'North America', 'South America', 'Central America', 'Caribbean',
            'Southeast Asia', 'Eastern Asia', 'Southern Asia', 'Western Asia'];
  }

  static get languages(): string[] {
    return ['eng', 'spa', 'fra', 'ara', 'por', 'deu', 'rus', 'jpn', 'kor', 'hin'];
  }

  static get currencies(): string[] {
    return ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'INR', 'BRL'];
  }

  static get countryCodes(): string[] {
    return ['US', 'GB', 'FR', 'DE', 'IT', 'ES', 'JP', 'CN', 'IN', 'BR'];
  }

  static get capitals(): string[] {
    return ['London', 'Paris', 'Berlin', 'Rome', 'Madrid', 'Tokyo', 'Beijing', 'Delhi', 'Washington', 'Moscow'];
  }

  static get countryNames(): string[] {
    return ['United States', 'United Kingdom', 'France', 'Germany', 'Italy', 'Spain', 'Japan', 'China', 'India', 'Brazil'];
  }
}