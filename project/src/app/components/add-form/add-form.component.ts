import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Groups } from 'src/app/models/groups';
import { Categories } from 'src/app/models/categories';

import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html'
})
export class AddFormComponent implements OnInit {

  categories: Categories[] = [];
  form: any;
  constructor(private _apiService: ApiService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.createForm();
    this.loadCategories();
  }

  formSubmit(formData: Groups): void {

    console.log("formData", formData);

    this._apiService.postGroup(formData).subscribe(resp => {

      if (resp == 1) {
        this.openSnackBar('Grubunuz oluşturuldu...', 'kapat');
        setTimeout(() => {
          this.createForm();
        }, 500);
      }

    });

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  loadCategories() {
    this._apiService.loadCategories().subscribe(resp => {
      this.categories = resp;
    });
  }

  createForm() {

    this.form = new FormGroup({
      CategoryId: new FormControl(''),
      Name: new FormControl(''),
    });

  }

}
