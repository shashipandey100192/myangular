import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboadRoutingModule } from './dashboad-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MygraphComponent } from './mygraph/mygraph.component';


@NgModule({
  declarations: [
    LandingpageComponent,
    MygraphComponent
  ],
  imports: [
    CommonModule,
    DashboadRoutingModule
  ]
})
export class DashboadModule { }
