import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterModule, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PasajeroService } from './pasajero.service';

@Component({
    selector: 'app-p-registro-pasajero',
    templateUrl: './p-registro-pasajero.page.html',
    styleUrls: ['./p-registro-pasajero.page.scss'],
    imports: [CommonModule, FormsModule, RouterModule, IonicModule]
})
export class PRegistroPasajeroPage implements OnInit {
    id: string = ''; 
    nombre: string = '';
    apellidos: string = '';
    correo: string = '';
    password: string = '';
  
    constructor(
        private pasajeroService: PasajeroService,
        private router: Router
    ) {}

    ngOnInit() {
        // Implementa la lógica de inicialización si es necesaria
    }
  
    registrarPasajero() {
        const datos = {
            id: this.id,
            nombre: this.nombre,
            apellidos: this.apellidos,
            correo: this.correo,
            password: this.password,
        };
  
        this.pasajeroService.registrarPasajero(datos).subscribe(
            (response) => {
                console.log('Pasajero registrado:', response);
                alert('Registro exitoso');
                this.router.navigate(['/mapa-usuario']);
            },
            (error) => {
                console.error('Error al registrar pasajero:', error);
                alert('Hubo un error en el registro');
            }
        );
    }
}