import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { AdminRoutingModule } from './admin-routing.module';

import { NavComponent } from './Components/nav/nav.component';
import { ProductFormComponent } from './Components/product-form/product-form.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { DashboardComponent} from './Components/dashboard/dashboard.component';
import { TableComponent } from './Components/table/table.component';
import { AdminProductFormComponent } from './Components/admin-product-form/admin-product-form.component';
import { AdminProductFormEditComponent } from './Components/admin-product-form-edit/admin-product-form-edit.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    ProductListComponent,
    DashboardComponent,
    TableComponent,
    AdminProductFormComponent,
    AdminProductFormEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
