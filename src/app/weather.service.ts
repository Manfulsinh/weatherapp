import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private API_KEY = '384194ef50b4b6655daaf22682d24591';
  private BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';

  constructor(private httpClient: HttpClient) {}

  getWeather(city: string) {
    return this.httpClient.get(
      `${this.BASE_URL}${city}&appid=${this.API_KEY}`
    );
  }
}
