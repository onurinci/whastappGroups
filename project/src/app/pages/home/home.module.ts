import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WelcomeTextComponent } from 'src/app/components/welcome-text/welcome-text.component';
import { AddFormComponent } from 'src/app/components/add-form/add-form.component';

// material modules
import { MatAutocompleteModule, MatInputModule, MatButtonModule,MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [HomeComponent, WelcomeTextComponent, AddFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule, MatInputModule, MatButtonModule,MatSnackBarModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
