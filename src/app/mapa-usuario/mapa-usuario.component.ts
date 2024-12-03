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
  templateUrl: './mapa-usuario.component.html',
  styleUrls: ['./mapa-usuario.component.scss']
})
export class MapaUsuarioComponent implements OnInit, AfterViewInit {
  private mapa!: L.Map;
  rutasDisponibles: any[] = [];
  rutaActual: any = null;
  rutaSeleccionada: any = null; // Asegúrate de tener esta propiedad

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
      this.mapa.invalidateSize();
    }, 100);
  }

  cargarRutasDisponibles() {
    this.rutasDisponibles = JSON.parse(localStorage.getItem('rutas') || '[]');
  }

  seleccionarRuta(ruta: any) {
    this.rutaSeleccionada = ruta; // Actualiza la ruta seleccionada
  }

  asignarRuta() {
    if (!this.rutaSeleccionada) return;

    if (this.rutaActual) {
      this.mapa.removeControl(this.rutaActual);
    }
    const inicio = L.latLng(this.rutaSeleccionada.inicio.lat, this.rutaSeleccionada.inicio.lng);
    const fin = L.latLng(this.rutaSeleccionada.destino.lat, this.rutaSeleccionada.destino.lng);

    const usuarioId = localStorage.getItem('usuarioId');
    const rutaAsignada = {
      ...this.rutaSeleccionada,
      usuarioId: usuarioId,
      fechaAsignacion: new Date().toISOString()
    };
    const rutasAsignadas = JSON.parse(localStorage.getItem('rutasAsignadas') || '[]');
    rutasAsignadas.push(rutaAsignada);
    localStorage.setItem('rutasAsignadas', JSON.stringify(rutasAsignadas));

    this.mostrarRuta(inicio, fin);
    this.rutaSeleccionada = null; // Limpiar la selección después de asignar
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