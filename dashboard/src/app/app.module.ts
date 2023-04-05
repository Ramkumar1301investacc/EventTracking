import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UatDashboardComponent } from './component/uat-dashboard/uat-dashboard.component';
import { ProductionDashboardComponent } from './component/production-dashboard/production-dashboard.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginpageComponent } from './component/loginpage/loginpage.component';
import { UatstoryboardComponent } from './component/uatstoryboard/uatstoryboard.component';
import { ProductionstoryboardComponent } from './component/productionstoryboard/productionstoryboard.component';
import { Uatstoryboard1Component } from './component/uatstoryboard1/uatstoryboard1.component';
import { Productionstoryboard1Component } from './component/productionstoryboard1/productionstoryboard1.component';
import { UatdashboardComponent } from './component/uatdashboard/uatdashboard.component';
import { UatproductionComponent } from './component/uatproduction/uatproduction.component';

@NgModule({
  declarations: [
    AppComponent,
    UatDashboardComponent,
    ProductionDashboardComponent,
    NavbarComponent,
    LoginpageComponent,
    UatstoryboardComponent,
    ProductionstoryboardComponent,
    Uatstoryboard1Component,
    Productionstoryboard1Component,
    UatdashboardComponent,
    UatproductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
