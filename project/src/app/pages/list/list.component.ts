import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Categories } from 'src/app/models/categories';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  incCategoriesData : any[] = [];
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.loadIncGroups();
  }

  loadIncGroups() {
    this._apiService.loadIncGroups().subscribe(resp => {
      console.log(resp);
      this.incCategoriesData = resp;
    });
  }

}
