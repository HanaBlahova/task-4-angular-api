import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService, 
    private router: Router
    ) { }

  loginForm: FormGroup;
  testUser = {
    userEmail: 'test@test.com',
    userPassword: 'test1234'
  };
  failedLogin = false;

  ngOnInit(): void {
    this.loginForm = new FormGroup ({
      'email': new FormControl(null, [Validators.email, Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

  }

  onSubmit() {
    console.log(this.loginForm);
    this.verify();
  }

  verify() {
    if (this.loginForm.get('email').value === this.testUser.userEmail 
    && this.loginForm.get('password').value === this.testUser.userPassword) {
      this.authService.isLoggedIn$.next(true);
      this.router.navigate(['/countries']);
    } else {
      this.failedLogin = true;
    }
  }

}
