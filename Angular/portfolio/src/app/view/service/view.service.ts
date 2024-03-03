import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  constructor(private http: HttpClient) {}

  sendData(params: Object): Observable<any> {
    try {
      return this.http.post('http://localhost:3000/chat', params).pipe(
        map((data) => {
          return data;
        })
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
