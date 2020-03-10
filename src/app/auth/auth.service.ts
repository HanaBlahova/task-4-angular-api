import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

  constructor() { }

  isLoggedIn$ = new BehaviorSubject(false);

  testUser = environment.testUser;

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
