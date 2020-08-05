import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
      },
      {
        path: ':id',
        component: ProductDetailComponent
      },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsRoutingModule {}
