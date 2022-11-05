import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AdminGuard } from './auth/admin.guard';
import { AddFamilyComponent } from './pages/add-family/add-family.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AllDonationListComponent } from './pages/admin/all-donation-list/all-donation-list.component';
import { AllNeedyPeopleComponent } from './pages/admin/all-needy-people/all-needy-people.component';
import { DonateformComponent } from './pages/donateform/donateform.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'donate', component:DonateformComponent, pathMatch:'full'},
  {path:'signup', component:RegistrationComponent, pathMatch:'full'},
  {path:'login', component:LoginComponent, pathMatch:'full'},
  {path:'add-family', component:AddFamilyComponent, pathMatch:'full'},
  {path:'profile', component:ProfileComponent, pathMatch:'full'},
  {path:'admin', component:AdminDashboardComponent,canActivate:[AdminGuard],
    children:[
          {path:'all-needy-people', component:AllNeedyPeopleComponent},
          {path:'all-donations', component:AllDonationListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
