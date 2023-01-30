import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { infoCity } from 'src/interface/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cities: Array<infoCity>
  selectedCities: Array<infoCity>
  infoCity: infoCity

  constructor(private dataService: DataService) {
    this.cities = []
    this.selectedCities = []
    this.infoCity = {
      id: -1,
      name: '',
      coord: {
        lat: -1,
        lon: -1
      }
    }

  }

  ngOnInit() { }

  searchCity(term: string) {
    this.dataService.getData().subscribe(data => {
      term = term.substring(0, 1).toUpperCase() + term.substring(1)
      return this.cities = Object.values(data).filter(value => value.name.includes(term))
    })
  }

  onSelect() {
    this.selectedCities.push(this.infoCity)
  }

}
