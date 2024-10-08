import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-dch-map',
  templateUrl: './dch-map.component.html',
  styleUrls: ['./dch-map.component.css']
})
export class DchMapComponent implements AfterViewInit {

  map!: L.Map;

  ngAfterViewInit(): void {
    this.map = L.map('map').setView([43.1210, -89.3307], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18 
    }).addTo(this.map);

    this.fetchPizzaPlaces();
  }

  fetchPizzaPlaces(): void {
    const overpassQuery = `
      [out:json][bbox:43.0376,-89.5535,43.1497,-89.2703];
      node
        ["cuisine"="pizza"];
      out;
    `;

    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.elements.forEach((place: any) => {
          const lat = place.lat;
          const lon = place.lon;
          const name = place.tags.name; 

          L.marker([lat, lon])
            .addTo(this.map)
            .bindPopup(`<b>${name}</b>`);
        });
      })
      .catch(error => console.error('Error fetching pizza places:', error));
  }
}
