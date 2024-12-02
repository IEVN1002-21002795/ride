import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';



@Component({
    selector: 'app-p-registro-conductor',
    templateUrl: './p-registro-conductor.page.html',
    styleUrls: ['./p-registro-conductor.page.scss'],
    imports: [CommonModule, FormsModule, IonicModule, RouterModule]
})

export class PRegistroConductorPage {
  id: string = '';
  nombre: string = '';
  apellidos: string = '';
  correo: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  registrarConductor() {
    const datos = {
      id: this.id,
      nombre: this.nombre,
      apellidos: this.apellidos,
      correo: this.correo,
      password: this.password,
    };

    this.http.post('http://127.0.0.1:5000/registro_conductor', datos).subscribe(
      (response: any) => {
        console.log('Respuesta del servidor:', response);
        alert('¡Conductor registrado exitosamente!');
      },
      (error) => {
        console.error('Error al registrar conductor:', error);
        alert('Ocurrió un error al registrar el conductor.');
      }
    );
  }
}