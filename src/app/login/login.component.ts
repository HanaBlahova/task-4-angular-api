import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup ({
      'email': new FormControl(null, [Validators.email, Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

  }

  onSubmit() {
    console.log(this.loginForm);
  }

}
