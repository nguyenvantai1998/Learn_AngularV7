import { Component } from '@angular/core';

@Component({
    selector: 'app-employee-list',
    template: `
        <h2>Emploee List</h2>
        <ul *ngFor="let employee of employees">
            <li>{{ employee.name }}</li>
        </ul>
    `
})

export class employeeListComponent{
    public employees = [
        {"id":1,"name":"Văn Tài","age":20},
        {"id":2,"name":"Hồng Sơn","age":21},
        {"id":3,"name":"Hoàng Khiêm","age":19},
        {"id":4,"name":"Phát Tài","age":20}
    ]
}