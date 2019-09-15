import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  execChange: Subject<any> = new Subject<any>();
  constructor() { }

  addedChange(data: Boolean) {
    this.execChange.next(data);
  }

}
