import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConductorService {
  constructor(private api: ApiService) {}

  registrarConductor(datos: any): Observable<any> {
    return this.api.post('registro_conductor', datos); // Usa ApiService para realizar la solicitud
  }
}
