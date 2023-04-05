import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './component/loginpage/loginpage.component';
import { NavbarComponent } from './component/navbar/navbar.component';

import { Uatstoryboard1Component } from './component/uatstoryboard1/uatstoryboard1.component';
import { Productionstoryboard1Component } from './component/productionstoryboard1/productionstoryboard1.component';
import { UatproductionComponent } from './component/uatproduction/uatproduction.component';

const routes: Routes = [
  {path:'' , component:LoginpageComponent},
  {path:'login', component:LoginpageComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'awsuat',component:UatproductionComponent},
  {path:'awsprod',component:UatproductionComponent},
  {path:'awsuat1',component:Uatstoryboard1Component},
  {path:'awsprod1',component:Productionstoryboard1Component}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
