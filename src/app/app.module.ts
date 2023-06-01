import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MybootstrapComponent } from './mybootstrap/mybootstrap.component';
import { MycardComponent } from './mycard/mycard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbootstrapComponent } from './ngbootstrap/ngbootstrap.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmatrialComponent } from './angularmatrial/angularmatrial.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactusComponent,
    MybootstrapComponent,
    MycardComponent,
    NgbootstrapComponent,
    AngularmatrialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
