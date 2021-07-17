import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'products',
    pathMatch: 'full' 
  },
  {
    path: 'product/:productId',
    component: ProductComponent
  },
  {
    path: 'products',
    component: ProductsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
