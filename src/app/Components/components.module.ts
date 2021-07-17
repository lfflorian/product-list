import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ModalComponent, ProductComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    ModalComponent,
    ProductComponent
  ]
})
export class ComponentsModule { }
