import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  isLoggedIn$ = new BehaviorSubject(false);

  testUser = {
    userEmail: 'test@test.com',
    userPassword: 'test1234'
  };

  verify(loginForm: any) {
    if (loginForm.email === this.testUser.userEmail 
    && loginForm.password === this.testUser.userPassword) {
      this.isLoggedIn$.next(true);
      return true;
    } else {
      this.isLoggedIn$.next(false);
      return false;
    }
  }
 

}
