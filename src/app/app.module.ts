import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryComponent } from './all-countries/country/country.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/guards/auth.guard';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: '', redirectTo: 'countries', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'countries', component: AllCountriesComponent },
  { path: 'country/:name', component: CountryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllCountriesComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
