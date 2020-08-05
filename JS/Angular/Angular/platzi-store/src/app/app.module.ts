import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './Modules/contact/contact.component';
import { DemoComponent } from './Modules/demo/demo.component';
import { PageNotFoundComponent } from './Modules/page-not-found/page-not-found.component';
import { LayoutComponent } from './Modules/layout/layout.component';

import { SharedModule } from './Modules/shared/shared.module';
import { CoreModule } from './Modules/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    DemoComponent,
    PageNotFoundComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
