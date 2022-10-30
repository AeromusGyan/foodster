import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFamilyComponent } from './pages/add-family/add-family.component';
import { DonateformComponent } from './pages/donateform/donateform.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'donate', component:DonateformComponent},
  {path:'signup', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'add-family', component:AddFamilyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
