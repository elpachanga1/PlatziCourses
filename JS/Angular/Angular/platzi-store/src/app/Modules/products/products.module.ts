import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './Components/product/product.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
