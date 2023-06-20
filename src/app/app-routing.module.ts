import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LadingpageComponent } from './ladingpage/ladingpage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MyformsComponent } from './myforms/myforms.component';
import { MyarryformComponent } from './myarryform/myarryform.component';

const routes: Routes = [
  {
    path:'',
    component:LadingpageComponent
  },
  {
    path:'home',
    component:HomepageComponent
  },
  {
    path:'myform',
    component:MyformsComponent
  },
  {
    path:'arrform',
    component:MyarryformComponent
  },
  {
    path:'**',
    component:NotfoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
