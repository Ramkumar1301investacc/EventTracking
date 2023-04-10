import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './component/loginpage/loginpage.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { EnrollmentProductionComponent } from './component/enrollment-production/enrollment-production.component';
import { EnrollmentUatComponent } from './component/enrollment-uat/enrollment-uat.component';



const routes: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component:LoginpageComponent},
  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      { path: 'awsuat', component: EnrollmentUatComponent, outlet: 'primary' },
      { path: 'awsproduction', component: EnrollmentProductionComponent, outlet: 'primary' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
