import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-welcome-text',
  templateUrl: './welcome-text.component.html'
})
export class WelcomeTextComponent implements OnInit {

  constructor(private _globalService: GlobalService) { }

  addedChangeDefaultValue = true;
  ngOnInit() {
    
  }

  addButton() {
    this.addedChangeDefaultValue = !this.addedChangeDefaultValue;
    this._globalService.addedChange(!this.addedChangeDefaultValue);
  }

}
