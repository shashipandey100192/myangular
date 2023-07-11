import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    ProductdetailsComponent,
    NewproductComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
