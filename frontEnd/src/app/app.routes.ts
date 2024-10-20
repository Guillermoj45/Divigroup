import {Routes} from '@angular/router';

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
    loadComponent: () => import('./pantallas/sesion/inicio-sesion/inicio-sesion.component').then((m) => m.InicioSesionComponent),
  },
  {
    path: 'registro',
    loadComponent: () => import('./pantallas/sesion/crear-cuenta/crear-cuenta.component').then((m) => m.CrearCuentaComponent),
  },
  {
    path: 'recuperacion',
    loadComponent: () => import('./pantallas/sesion/password-olvidada/password-olvidada.component').then((m) => m.PasswordOlvidadaComponent),
  },
  {
    path: 'notificaciones',
    loadComponent: () => import('./pantallas/sesion/notificaciones/notificaciones.component').then((m) => m.NotificacionesComponent),
  },
  {
    path: 'amigos',
    loadComponent: () => import('./pantallas/amigos/amigos.component').then((m) => m.AmigosComponent),
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pantallas/sesion/perfil/perfil.component').then((m) => m.PerfilComponent),
  },
  {
    path: 'amigos/perfil',
    loadComponent: () => import('./pantallas/amigo/amigo.component').then((m) => m.AmigoComponent),
  },
  {
    path: 'amigos/chat',
    loadComponent: () => import('./pantallas/chat/chat.component').then((m) => m.ChatComponent),
  },
  {
    path: 'cuentas/cuenta',
    loadComponent: () => import('./pantallas/cuentas/cuenta/cuenta.component').then((m) => m.CuentaComponent),
  },
  {
    path: 'cuentas/crear',
    loadComponent: () => import('./pantallas/cuentas/agragar-cuenta/agragar-cuenta.component').then((m) => m.AgragarCuentaComponent),
  },
  {
    path: 'producto/crear',
    loadComponent: () => import('./pantallas/productos/agregar-producto/agregar-producto.component').then((m) => m.AgregarProductoComponent),
  },
  {
    path: 'producto',
    loadComponent: () => import('./pantallas/productos/pantalla-producto/pantalla-producto.component').then((m) => m.PantallaProductoComponent),
  },
];
