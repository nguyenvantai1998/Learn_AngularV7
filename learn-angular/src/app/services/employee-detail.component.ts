import { Component } from '@angular/core';

@Component({
    selector: 'app-employeeDetail',
    template:`
        <h2>Emploee List Detail</h2>
        <ul *ngFor='let employee of employees'>
            <li>{{ employee.id }}. {{ employee.name }} - {{ employee.age }}</li>
        </ul>
    `
})

export class employeeDetailComponent{
    public employees = [
        {"id":1,"name":"Văn Tài","age":20},
        {"id":2,"name":"Hồng Sơn","age":21},
        {"id":3,"name":"Hoàng Khiêm","age":19},
        {"id":4,"name":"Phát Tài","age":20}
    ]
}