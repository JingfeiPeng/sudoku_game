import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import config from '../config';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  solver(suduku: string[][]): Observable<any>{
    return this.http.post(config.baseUrl+"solveSudoku/", {
      "pazzle":suduku
    })
  }

  validateCurrentProgress(suduku: string[][]): Observable<any>{
    return this.http.post(config.baseUrl+"validate/", {
      "pazzle": suduku
    })
  }
}
