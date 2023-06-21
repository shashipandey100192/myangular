import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NewproductComponent } from './newproduct/newproduct.component';

const routes: Routes = [
  {
    path:'',
    component:ProductdetailsComponent
  },
  {
    path:'newproduct',
    component:NewproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
