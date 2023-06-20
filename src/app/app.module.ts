import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { LadingpageComponent } from './ladingpage/ladingpage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MynavComponent } from './mynav/mynav.component';
import {FormsModule} from '@angular/forms';
import { MyformsComponent } from './myforms/myforms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyarryformComponent } from './myarryform/myarryform.component';



@NgModule({
  declarations:[
    AppComponent,
    HomepageComponent,
    LadingpageComponent,
    NotfoundComponent,
    MynavComponent,
    MyformsComponent,
    MyarryformComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
      

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
