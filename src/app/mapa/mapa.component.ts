import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  private mapa!: L.Map;
  searchQuery: string = '';
  private searchSubject = new Subject<string>();
  ubicacionActual: L.LatLng | null = null;
  marcadorDestino: L.Marker | null = null;
  rutaActual: any = null;
  mensajeGuardado: string = '';
  mostrarMensaje: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(query => {
      if (query) {
        this.buscarLugar(query);
      }
    });
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.initMap();
    this.obtenerUbicacionActual();
  }

  private initMap(): void {
    this.mapa = L.map('map').setView([19.4326, -99.1332], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.mapa);

    this.mapa.on('click', (e: L.LeafletMouseEvent) => {
      this.establecerDestino(e.latlng);
    });
  }

  onSearchInput() {
    this.searchSubject.next(this.searchQuery);
  }

  private buscarLugar(query: string) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;
    this.http.get(url).subscribe((results: any) => {
      if (results.length > 0) {
        const lat = parseFloat(results[0].lat);
        const lon = parseFloat(results[0].lon);
        const latlng = L.latLng(lat, lon);
        this.establecerDestino(latlng);
      }
    });
  }

  private obtenerUbicacionActual() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.ubicacionActual = L.latLng(position.coords.latitude, position.coords.longitude);
        this.mapa.setView(this.ubicacionActual, 15);
        L.marker(this.ubicacionActual).addTo(this.mapa)
          .bindPopup('Tu ubicación actual')
          .openPopup();
      });
    }
  }

  private establecerDestino(latlng: L.LatLng) {
    if (this.marcadorDestino) {
      this.mapa.removeLayer(this.marcadorDestino);
    }
    if (this.rutaActual) {
      this.mapa.removeControl(this.rutaActual);
    }
    
    this.marcadorDestino = L.marker(latlng).addTo(this.mapa);

    if (this.ubicacionActual) {
      this.crearRuta(this.ubicacionActual, latlng);
    }
  }

  private crearRuta(inicio: L.LatLng, fin: L.LatLng) {
    this.rutaActual = L.Routing.control({
      waypoints: [inicio, fin],
      routeWhileDragging: true,
      addWaypoints: false
    }).addTo(this.mapa);
  }

  volverAPrincipal() {
    this.router.navigate(['/p-main-conductor']);
  }

  guardarRuta() {
    if (this.ubicacionActual && this.marcadorDestino) {
      const rutaGuardada = {
        inicio: {
          lat: this.ubicacionActual.lat,
          lng: this.ubicacionActual.lng
        },
        destino: {
          lat: this.marcadorDestino.getLatLng().lat,
          lng: this.marcadorDestino.getLatLng().lng
        },
        fecha: new Date().toISOString()
      };
      
      // Guardar en localStorage
      const rutas = JSON.parse(localStorage.getItem('rutas') || '[]');
      rutas.push(rutaGuardada);
      localStorage.setItem('rutas', JSON.stringify(rutas));
      
      this.mensajeGuardado = 'Ruta guardada exitosamente';
      this.mostrarMensaje = true;
      setTimeout(() => {
        this.mostrarMensaje = false;
      }, 3000); // El mensaje desaparecerá después de 3 segundos
    } else {
      this.mensajeGuardado = 'Por favor, selecciona un destino antes de guardar la ruta';
      this.mostrarMensaje = true;
      setTimeout(() => {
        this.mostrarMensaje = false;
      }, 3000);
    }
  }
}