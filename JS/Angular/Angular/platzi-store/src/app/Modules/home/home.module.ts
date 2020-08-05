import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './Components/banner/banner.component';
import { HomeComponent } from './Components/home/home.component';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
