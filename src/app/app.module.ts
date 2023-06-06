import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { LadingpageComponent } from './ladingpage/ladingpage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MynavComponent } from './mynav/mynav.component';


@NgModule({
  declarations:[
    AppComponent,
    HomepageComponent,
    LadingpageComponent,
    NotfoundComponent,
    MynavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
