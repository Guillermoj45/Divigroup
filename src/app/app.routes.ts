import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pantallas/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'inicio-sesion',
    pathMatch: 'full',
  },
  {
    path: 'inicio-sesion',
    loadComponent: () => import('./pantallas/inicio-sesion/inicio-sesion.component').then((m) => m.InicioSesionComponent),
  },
  {
    path: 'amigos',
    loadComponent: () => import('./amigos/amigos.component').then((m) => m.AmigosComponent),
  }
];
