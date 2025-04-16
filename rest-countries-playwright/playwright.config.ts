import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30000,
  reporter: [['html'], ['list']],
  use: {
    baseURL: 'https://restcountries.com/v3.1',
    extraHTTPHeaders: {
      'Accept': 'application/json'
    },
  },
  projects: [
    {
      name: 'REST Countries API Tests',
      testMatch: /.*countries.*/
    }
  ]
};

export default config;