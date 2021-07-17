import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'products',
    pathMatch: 'full' 
  },
  {
    path: 'product/:productId',
    component: ProductViewComponent
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
