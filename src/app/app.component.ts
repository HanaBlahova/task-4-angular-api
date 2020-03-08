import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'countries';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}
  
  loggedIn$: boolean;
  subscription = this.auth.isLoggedIn$.subscribe(
    (value) => {
      this.loggedIn$ = value;
    });

    onLogOut() {
      this.auth.isLoggedIn$.next(false);
      this.router.navigate(['/login']);
    }
}



