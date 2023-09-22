import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  NavigationExtras,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngresadoGuard implements CanActivate {
  constructor(private router: Router, private activeroute: ActivatedRoute) {}

  user = {
    username: '',
    password: '',
  };

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.user.username === 'fcalfun' && this.user.password === '1234') {
      // El inicio de sesión fue exitoso, puedes redirigir a otra página
      // O realizar otras acciones necesarias
      console.log('Inicio de sesión exitoso');
      const navigationExtras: NavigationExtras = {
        state: { username: this.user.username },
      };
      this.router.navigate(['/home'], navigationExtras);
      return true;
    } else {
      // El inicio de sesión falló, muestra un mensaje de error o realiza otras acciones necesarias
      console.error('Inicio de sesión fallido');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
