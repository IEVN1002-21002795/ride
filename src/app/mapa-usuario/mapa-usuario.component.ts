import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mapa-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  template: `
    <div class="back-button" (click)="volverAPrincipal()">
      <ion-icon name="arrow-back-outline"></ion-icon>
    </div>
    <div class="rutas-container">
      <h3>Rutas Disponibles</h3>
      <div class="ruta-item" *ngFor="let ruta of rutasDisponibles" (click)="seleccionarRuta(ruta)">
        <p>Ruta: {{ruta.fecha | date:'short'}}</p>
      </div>
    </div>
    <div id="map"></div>
  `,
  styleUrls: ['./mapa-usuario.component.scss']
})
export class MapaUsuarioComponent implements OnInit, AfterViewInit {
  private mapa!: L.Map;
  rutasDisponibles: any[] = [];
  rutaActual: any = null;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.cargarRutasDisponibles();
  }

  ngAfterViewInit() {
    this.initMap();
  }

  private initMap(): void {
    setTimeout(() => {
      this.mapa = L.map('map', {
        center: [19.4326, -99.1332],
        zoom: 13
      });
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.mapa);
  
      // Forzar un reajuste del mapa
      this.mapa.invalidateSize();
    }, 100);
  }

  cargarRutasDisponibles() {
    this.rutasDisponibles = JSON.parse(localStorage.getItem('rutas') || '[]');
  }

  seleccionarRuta(ruta: any) {
    if (this.rutaActual) {
      this.mapa.removeControl(this.rutaActual);
    }
    
    const inicio = L.latLng(ruta.inicio.lat, ruta.inicio.lng);
    const fin = L.latLng(ruta.destino.lat, ruta.destino.lng);
    
    this.mostrarRuta(inicio, fin);
  }

  private mostrarRuta(inicio: L.LatLng, fin: L.LatLng) {
    this.rutaActual = L.Routing.control({
      waypoints: [inicio, fin],
      routeWhileDragging: false,
      addWaypoints: false
    }).addTo(this.mapa);
  }

  volverAPrincipal() {
    this.router.navigate(['/p-main-usuario']);
  }
}