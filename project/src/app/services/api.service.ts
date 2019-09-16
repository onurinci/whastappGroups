import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Groups } from '../models/groups';
import { Categories } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiBaseUrl: string = "https://localhost:5001";
  constructor(private _http: HttpClient) { }

  loadCategories(): Observable<Categories[]> {
    return this._http.get<Categories[]>(`${this.apiBaseUrl}/api/categories/list`);
  }

  loadIncGroups(): Observable<any[]> {
    return this._http.get<any[]>(`${this.apiBaseUrl}/api/categories/listIncGroups`);
  }

  loadGroups(): Observable<any[]> {
    return this._http.get<any[]>(`${this.apiBaseUrl}/api/group/list`);
  }

  postGroup(formData: Groups): Observable<number> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    console.log("postGroup in service", formData);

    return this._http.post<number>(`${this.apiBaseUrl}/api/group/add`, formData, httpOptions);
  }

}
