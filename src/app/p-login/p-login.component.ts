import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { RouterLink,RouterModule } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-p-login',
  templateUrl: './p-login.component.html',
  styleUrls: ['./p-login.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class PLoginComponent {
  matricula: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const datos = {
      id: this.matricula,
      password: this.password,
    };

    this.http.post('http://127.0.0.1:5000/login', datos).subscribe(
      (response: any) => {
        console.log('Respuesta del servidor:', response);

        if (response.message === 'Login exitoso') {
          if (response.tipo_usuario === 'pasajero') {
            this.router.navigate(['/mapa-usuario']); // Redirige a pasajeros
          } else if (response.tipo_usuario === 'conductor') {
            this.router.navigate(['/p-main-conductor']); // Redirige a conductores
          }
        } else {
          alert('Usuario o contraseña incorrectos.');
        }
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        alert('Hubo un problema al iniciar sesión. Inténtalo de nuevo.');
      }
    );
  }
}


