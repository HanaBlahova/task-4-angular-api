import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  loggedIn$: boolean;
  subscription = this.auth.isLoggedIn$.subscribe(
    (value) => {
      this.loggedIn$ = value;
    });

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // redirect and return false
    if (!this.loggedIn$) {
      this.router.navigate(['/login']);
      return false;
    }
    
      return true;
  }
  
}
