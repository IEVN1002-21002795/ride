import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
 
@Component({
  selector: 'app-p-carga',
  templateUrl: './p-carga.page.html',
  styleUrls: ['./p-carga.page.scss'],
  standalone: true,
  imports: []
})
 
export class PCargaPage implements OnInit {
 
  constructor(private router: Router) {}
 
  ngOnInit(): void {
    // Ocultar el Splash Screen después de 3 segundos y redirigir
    setTimeout(() => {
      this.router.navigate(['/p-main-login']); // Cambia '/inicio' a la ruta deseada
    }, 3000); // Tiempo en milisegundos
  }
}
 
