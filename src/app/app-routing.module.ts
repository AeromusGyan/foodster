import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateformComponent } from './pages/donateform/donateform.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'donate', component:DonateformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
