import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MygraphComponent } from './mygraph/mygraph.component';
import { DetailspageComponent } from './detailspage/detailspage.component';

const routes: Routes = [
  {
    path:'',
    component:LandingpageComponent
  },
  {
    path:'graph',
    component:MygraphComponent
  },
  {
    path:'dashboard/:id',
    component:DetailspageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboadRoutingModule { }
