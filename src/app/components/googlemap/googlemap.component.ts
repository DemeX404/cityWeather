import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {

  center: google.maps.LatLngLiteral;

  constructor() {
    this.center = {
      lat: 40,
      lng: -3
    }
  }

  ngOnInit(): void {}

  display: any;

  zoom = 15;

  putCoord(coord:any) {
    this.center = {
      lat: coord.lat,
      lng: coord.lon
    }
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

}
