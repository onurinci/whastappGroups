import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = "";
  constructor(private _http: HttpClient) { }

  getSliders(): Observable<any[]> {
    return this._http.get<any[]>(`${this.baseUrl}/api/apiData/GetSlidersList`);
  }

  postGroup(formData: any): Observable<number> {

    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    return this._http.post<number>(this.baseUrl + "api/apiData/Register", formData, httpOptions);
}

}
