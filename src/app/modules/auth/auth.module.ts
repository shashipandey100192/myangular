import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ForgatComponent } from './forgat/forgat.component';
import { RegistorComponent } from './registor/registor.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginpageComponent,
    ForgatComponent,
    RegistorComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
