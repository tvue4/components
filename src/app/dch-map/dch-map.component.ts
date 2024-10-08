import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-dch-map',
  templateUrl: './dch-map.component.html',
  styleUrls: ['./dch-map.component.css']
})
export class DchMapComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const map = L.map('map').setView([43.1210, -89.3307], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 15
    }).addTo(map);
  }

}
