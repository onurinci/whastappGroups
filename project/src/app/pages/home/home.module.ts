import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WelcomeTextComponent } from 'src/app/components/welcome-text/welcome-text.component';


@NgModule({
  declarations: [HomeComponent, WelcomeTextComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
