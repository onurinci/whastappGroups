import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiBaseUrl: string = "https://localhost:5001";
  constructor(private _http: HttpClient) { }

  getSliders(): Observable<any[]> {
    return this._http.get<any[]>(`${this.apiBaseUrl}/api/group/list`);
  }

  postGroup(formData: any): Observable<number> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    console.log("postGroup in service", formData);

    return this._http.post<number>(`${this.apiBaseUrl}/api/group/post`, formData, httpOptions);
  }

}
