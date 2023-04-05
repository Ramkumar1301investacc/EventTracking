import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './component/loginpage/loginpage.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { EnrollmentProductionComponent } from './component/enrollment-production/enrollment-production.component';
import { EnrollmentUatComponent } from './component/enrollment-uat/enrollment-uat.component';



const routes: Routes = [
  {path:'' , component:LoginpageComponent},
  {path:'login', component:LoginpageComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'awsuat',component:EnrollmentUatComponent},
  {path:'awsproduction' ,component:EnrollmentProductionComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
