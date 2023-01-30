import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  products: any = [];

  getData() {
    return this.httpClient.get("assets/cities.json")
  }

  getWeatherMap(id:Number){
    let url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=5b4a5fb7fff1a8f5a3c0cd68dc4e9a5b&units=metric`
    return this.httpClient.get(url)
  }

}
