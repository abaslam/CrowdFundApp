import { Component, Inject } from '@angular/core';
import { WeatherForecast, WeatherService } from '../shared/weather.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(service: WeatherService) {
    service.getWeatherForeCasts().subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

