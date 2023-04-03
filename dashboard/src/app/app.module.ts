import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UatDashboardComponent } from './component/uat-dashboard/uat-dashboard.component';
import { ProductionDashboardComponent } from './component/production-dashboard/production-dashboard.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginpageComponent } from './component/loginpage/loginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    UatDashboardComponent,
    ProductionDashboardComponent,
    NavbarComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
