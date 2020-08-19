import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ContactComponent } from './Modules/contact/contact.component';
import { DemoComponent } from './Modules/demo/demo.component';
import { PageNotFoundComponent } from './Modules/page-not-found/page-not-found.component';
import { LayoutComponent } from './Modules/layout/layout.component';

import { AdminGuard } from './Guardians/admin/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./Modules/home/home.module').then(mod => mod.HomeModule)
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        loadChildren: () => import('./Modules/products/products.module').then(mod => mod.ProductsModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        component: ContactComponent
      }
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./Modules/admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
