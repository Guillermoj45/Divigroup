import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pantallas/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: '/inicio-sesion',
    pathMatch: 'full',
  },
  {
    path: 'inicio-sesion',
    loadComponent: () => import('./pantallas/inicio-sesion/inicio-sesion.component').then((m) => m.InicioSesionComponent),
  },
  {
    path: 'amigos',
    loadComponent: () => import('./pantallas/amigos/amigos.component').then((m) => m.AmigosComponent),
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pantallas/perfil/perfil.component').then((m) => m.PerfilComponent),
  },
  {
    path: 'amigos/perfil',
    loadComponent: () => import('./pantallas/amigo/amigo.component').then((m) => m.AmigoComponent),
  },
  {
    path: 'cuentas/cuenta',
    loadComponent: () => import('./cuenta/cuenta.component').then((m) => m.CuentaComponent),
  }
];
