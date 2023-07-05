import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ForgatComponent } from './forgat/forgat.component';
import { RegistorComponent } from './registor/registor.component';


const routes: Routes = [
  {
    path:'',
    component:LoginpageComponent
  },
  {
    path:'forget',
    component:ForgatComponent
  },
  {
    path:'registor',
    component:RegistorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
