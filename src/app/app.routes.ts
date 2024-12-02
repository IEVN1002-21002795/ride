import { Routes } from '@angular/router';

export const routes: Routes = [
  {
<<<<<<< Updated upstream
    path: 'p-main-carga', 
=======
    path: '', 
>>>>>>> Stashed changes
    loadComponent: ()=> import('./p-carga/p-carga.page').then(m => m.PCargaPage)
  },
  {
    path: 'p-main-conductor',
    loadComponent: () => import('./p-main-conductor/p-main-conductor.page').then( m => m.PMainConductorPage)
  },
  {
    path: 'p-rutas',
    loadComponent: () => import('./p-rutas/p-rutas.page').then( m => m.PRutasPage)
<<<<<<< Updated upstream
  }
=======
  },
  {
    path: 'p-registro-pasajero',
    loadComponent: () => import('./p-registro-pasajero/p-registro-pasajero.page').then( m => m.PRegistroPasajeroPage)
  },
  {
    path: 'p-registro-conductor',
    loadComponent: () => import('./p-registro-conductor/p-registro-conductor.page').then( m => m.PRegistroConductorPage)
  },
  {
    path: 'p-main-login',
    loadComponent: () => import('./p-login/p-login.component').then( m => m.PLoginComponent)
  },
  {
    path: 'p-main-cuenta-a-crear',
    loadComponent: () => import('./p-cuenta-crear/p-cuenta-crear.component').then( m => m.PCuentaCrearComponent)
  },
  {
    path: 'p-main-conductor',
    loadComponent: () => import('./p-main-conductor/p-main-conductor.page').then( m => m.PMainConductorPage)
  },
  {
    path: 'p-rutas',
    loadComponent: () => import('./p-rutas/p-rutas.page').then( m => m.PRutasPage)
  },
  {
    path: 'mapa',
    loadComponent: () => import('./mapa/mapa.component').then( m => m.MapComponent)
  },
  {
    path: 'mapa-usuario',
    loadComponent: () => import('./mapa-usuario/mapa-usuario.component').then( m => m.MapaUsuarioComponent)
  },
  {
    path: 'p-main',
    loadComponent: () => import('./p-login/p-login.component').then( m => m.PLoginComponent)
  },
>>>>>>> Stashed changes
];
