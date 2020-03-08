import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryComponent } from './country/country.component';
import { LoggedInGuard } from './auth/guards/logged-in.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [LoggedInGuard] },
  { path: 'countries', component: AllCountriesComponent, canActivate: [AuthGuard] },
  { path: 'country/:name', component: CountryComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo:'login'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
