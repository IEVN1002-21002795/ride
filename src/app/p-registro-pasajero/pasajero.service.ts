import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PasajeroService {
  private apiUrl = 'http://127.0.0.1:5000'; // Cambia a tu dominio o IP si no está en local

  constructor(private http: HttpClient) {}

  registrarPasajero(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro_pasajero`, datos, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
}
