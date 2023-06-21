import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ForgatComponent } from './forgat/forgat.component';


@NgModule({
  declarations: [
    LoginpageComponent,
    ForgatComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
