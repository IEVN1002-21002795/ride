import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PasajeroService {
  constructor(private api: ApiService) {}

  registrarPasajero(datos: any): Observable<any> {
    return this.api.post('registro_pasajero', datos); // Usa ApiService para realizar la solicitud
  }
}
