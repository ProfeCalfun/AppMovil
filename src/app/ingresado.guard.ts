import { Injectable } from '@angular/core';
import {  ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,} from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class IngresadoGuard implements CanActivate {

  
  constructor(
    private router: Router, 
    private activeroute: ActivatedRoute, 
    ) { }

  user={
    username: "",
    password: "",
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):| Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
     
    return true;
     
      
  }
}
