import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-mapa',
  standalone: true,
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  private mapa!: L.Map;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.initMap();
  }

  private initMap(): void {
    this.mapa = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.mapa);
  }

  drawRoute(start: L.LatLngExpression, end: L.LatLngExpression) {
    L.Routing.control({
      waypoints: [
        L.latLng(start),
        L.latLng(end)
      ]
    }).addTo(this.mapa);
  }
}