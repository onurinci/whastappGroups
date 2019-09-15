import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WelcomeTextComponent } from 'src/app/components/welcome-text/welcome-text.component';
import { AddFormComponent } from 'src/app/components/add-form/add-form.component';

@NgModule({
  declarations: [HomeComponent, WelcomeTextComponent, AddFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
