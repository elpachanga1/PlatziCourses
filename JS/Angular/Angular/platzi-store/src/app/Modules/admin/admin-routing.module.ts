import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFormComponent } from './Components/product-form/product-form.component';
import { NavComponent } from './Components/nav/nav.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { AdminProductFormComponent } from './Components/admin-product-form/admin-product-form.component';
import { AdminProductFormEditComponent } from './Components/admin-product-form-edit/admin-product-form-edit.component';
import { DashboardComponent} from './Components/dashboard/dashboard.component';
import { TableComponent } from './Components/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'products/create',
        component: AdminProductFormComponent
      },
      {
        path: 'products/edit/:id',
        component: AdminProductFormEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
