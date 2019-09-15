import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  addContainer = false;
  constructor(private _globalService: GlobalService) {
    this._globalService.execChange.subscribe((value) => {
      this.addContainer = value;
    });
  }

  ngOnInit() {
    
  }

}
