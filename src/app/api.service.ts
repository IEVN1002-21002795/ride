import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:5000'; // URL base de la API

  constructor(private http: HttpClient) {}

  // Método general para realizar solicitudes POST
  post(endpoint: string, datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, datos, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Método general para realizar solicitudes GET
  get(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`);
  }
}
