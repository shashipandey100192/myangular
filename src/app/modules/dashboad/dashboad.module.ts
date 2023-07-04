import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboadRoutingModule } from './dashboad-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MygraphComponent } from './mygraph/mygraph.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { DetailspageComponent } from './detailspage/detailspage.component'; 


@NgModule({
  declarations: [
    LandingpageComponent,
    MygraphComponent,
    DetailspageComponent
  ],
  imports: [
    CommonModule,
    DashboadRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboadModule { }
