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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
