import { Injectable } from '@angular/core';
//  Fetch Data Using HTTP - Tìm nạp dữ liệu bằng HTTP
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employees';
import { Observable } from 'rxjs';

//1 xử lý lỗi - Error Handling
// import 'rxjs/add/operator/catch';
//3 xử lý lỗi - Error Handling
// import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //  Fetch Data Using HTTP - Tìm nạp dữ liệu bằng HTTP
  private _url: string = "/assets/data/employees.json";
  constructor(private http: HttpClient) { }

   //  Fetch Data Using HTTP - Tìm nạp dữ liệu bằng HTTP
  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
                    //2 xử lý lỗi - Error Handling
                    // .catch(this.errorHandler)
    
  }
  //3 xử lý lỗi - Error Handling
  // errorHandler(error: HttpErrorResponse){
  //   return Observable.throw(error.message || "Server Error");
  // }
}
