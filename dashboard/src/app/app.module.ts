import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginpageComponent } from './component/loginpage/loginpage.component';

import { EnrollmentUatComponent } from './component/enrollment-uat/enrollment-uat.component';
import { EnrollmentProductionComponent } from './component/enrollment-production/enrollment-production.component';

@NgModule({
  declarations: [
    AppComponent,
  
    NavbarComponent,
    LoginpageComponent,
    EnrollmentUatComponent,
    EnrollmentProductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
