import { Component, OnInit } from '@angular/core';

// Thử viện employee.service/ nếu không có thự tự add zo
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-detail1',
  template: `
    <h2>Emploee List Detail</h2>
    <ul *ngFor='let employee of employees'>
        <li>{{ employee.id }}. {{ employee.name }} - {{ employee.age }}</li>
    </ul>
  `,
  styleUrls: ['./employee-detail1.component.css']
})
export class EmployeeDetail1Component implements OnInit {

  //Khởi tạo 1 mảng rổng chứa giá trị đổ về từ employee.services.ts
  // -------Câu lệnh tạo ng g s nameServices
  public employees = [];

  //Gọi dữ liệu trả về employee.services.ts
  constructor(private _employeeServices: EmployeeService) { }

  ngOnInit() {
    //Hiển thị dữ liệu vào mảng rỗng vừa khỏi tạo
    this._employeeServices.getEmployees()
        .subscribe(data => this.employees = data);
  }

}
