import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'p-main-carga', 
    loadComponent: ()=> import('./p-carga/p-carga.page').then(m => m.PCargaPage)
  },
  {
    path: 'p-main-conductor',
    loadComponent: () => import('./p-main-conductor/p-main-conductor.page').then( m => m.PMainConductorPage)
  },
  {
    path: 'p-rutas',
    loadComponent: () => import('./p-rutas/p-rutas.page').then( m => m.PRutasPage)
  }
];
