import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryComponent } from './all-countries/country/country.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'countries', component: AllCountriesComponent, canActivate: [AuthGuard] },
  { path: 'country/:name', component: CountryComponent },
  { path: "**", redirectTo:'login'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
