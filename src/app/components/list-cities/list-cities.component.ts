import { Component, Input, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { coord, infoCity, infoWeather } from 'src/interface/interfaces';
import { GooglemapComponent } from '../googlemap/googlemap.component';

@Component({
  selector: 'app-list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.css']
})
export class ListCitiesComponent {
  infoWeather: infoWeather
  @ViewChild('googleMap', { static: false }) googleMap!: GooglemapComponent;
  @Input() infoCity: infoCity
  @Input() indice!: number;

  constructor(private dataService: DataService) {
    this.infoCity = {
      id: -1,
      name: '',
      coord: {
        lat: -1,
        lon: -1
      }
    }

    this.infoWeather = {
      id: -1,
      description: '',
      icon: '',
      main: '',
      temp: -999
    }

  }
  ngOnInit() { }

  callChildFunction(coord: coord) {
    this.googleMap.putCoord(coord);
  }

  searchInfoCity() {
    this.callChildFunction(this.infoCity.coord)

    this.dataService.getWeatherMap(this.infoCity.id).subscribe(info => {
      let objInfo: any = {}
      objInfo = info
      this.infoWeather = {
        id: objInfo.weather[0].id,
        description: objInfo.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${objInfo.weather[0].icon}@2x.png`,
        main: objInfo.weather[0].main,
        temp: objInfo.main.temp
      }
    })
  }

}
