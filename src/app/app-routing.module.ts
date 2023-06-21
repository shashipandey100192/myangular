import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankpageComponent } from './layout/blankpage/blankpage.component';
import { FullpageComponent } from './layout/fullpage/fullpage.component';


const routes: Routes = [
  {
    path:'',
    component:BlankpageComponent,
    children:[
      {
        path:'', redirectTo:'auth', pathMatch:'full'
      },
      {
        path:'auth',
        component:BlankpageComponent,
        loadChildren: () => import('./modules/auth/auth.module').then(m=>m.AuthModule)
      }
      
    ]
  },
  {
    path:'',
    component:FullpageComponent,
    children:[
      {
        path:'', redirectTo:'dashboard', pathMatch:'full'
      },
      {
        path:'dashboard',
        component:FullpageComponent,
        loadChildren: ()=> import('./modules/dashboad/dashboad.module').then(m=>m.DashboadModule)
      },
      {
        path:'product',
        component:FullpageComponent,
        loadChildren: ()=> import('./modules/product/product.module').then(m =>m.ProductModule)
      }
    ]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
