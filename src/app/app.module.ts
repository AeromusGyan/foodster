import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './master/header/header.component';
import { FooterComponent } from './master/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DonateformComponent } from './pages/donateform/donateform.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { AddFamilyComponent } from './pages/add-family/add-family.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './services/auth.interceptor';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { AllNeedyPeopleComponent } from './pages/admin/all-needy-people/all-needy-people.component';
import { AllDonationListComponent } from './pages/admin/all-donation-list/all-donation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DonateformComponent,
    RegistrationComponent,
    LoginComponent,
    AddFamilyComponent,
    ProfileComponent,
    AdminDashboardComponent,
    SidebarComponent,
    AllNeedyPeopleComponent,
    AllDonationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
