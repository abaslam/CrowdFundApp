import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//@Injectable({
//  providedIn: 'root'
//})
export class WeatherService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
   
  }

  getWeatherForeCasts(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>(this.baseUrl + 'api/SampleData/WeatherForecasts')
  }
}

export interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
