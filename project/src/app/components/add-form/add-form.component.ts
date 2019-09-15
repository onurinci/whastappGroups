import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html'
})
export class AddFormComponent implements OnInit {

  form: any;
  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  formSubmit(formData: any) : void {
    console.log("formData", formData);
  }

  createForm() {

    this.form = new FormGroup ({
      Name: new FormControl('')
    });

  }

}
