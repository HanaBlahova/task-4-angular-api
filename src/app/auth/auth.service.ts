import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  constructor() { }
/*
  get isLoggedIn() {
    return false;
  }
  */

isLoggedIn$ = new BehaviorSubject(false);
 

 //isLoggedIn = false;

}
