// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'weather-app';
// }


import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    city: string = '';
    weatherData: any;
    currentDate: string = new Date().toLocaleString();

    constructor(private weatherService: WeatherService) {}

    fetchWeather() {
        this.weatherService.getWeather(this.city).subscribe(data => {
            this.weatherData = data;
        });
    }
}
