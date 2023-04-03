import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './component/loginpage/loginpage.component';
import { NavbarComponent } from './component/navbar/navbar.component';

const routes: Routes = [
  {path:'' , component:LoginpageComponent},
  {path:'login', component:LoginpageComponent},
  {path:'navbar', component:NavbarComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
