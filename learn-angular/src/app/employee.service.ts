import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  //Tạo ra 1 hàm trung gian trả giá trị về khi gọi hàm phía app.module.ts
  getEmployees(){
    return[
      {"id":1,"name":"Văn Tài","age":25},
      {"id":2,"name":"Hồng Sơn","age":21},
      {"id":3,"name":"Hoàng Khiêm","age":19},
      {"id":4,"name":"Phát Tài","age":20}
    ];
  }
}
