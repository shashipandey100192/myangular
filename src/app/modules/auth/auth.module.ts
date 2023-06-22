import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ForgatComponent } from './forgat/forgat.component';
import { RegistorComponent } from './registor/registor.component';


@NgModule({
  declarations: [
    LoginpageComponent,
    ForgatComponent,
    RegistorComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
