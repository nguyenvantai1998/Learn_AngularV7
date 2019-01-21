import { Component } from '@angular/core';

@Component({
    selector: 'app-demo2',
    template: `
        <h1><b>{{ nameDemo2 }}</b></h1>
        <h1>Đây là tổng hợp các câu lệnh demo angular</h1>

        <h2>{{nameDemo2 + " Tôi rất đam me angular" }}</h2>

        <h5>Tổng 5 + 4 = {{5+4}}</h5>

        <h2>Đếm chuỗi: {{nameDemo2.length}}</h2>
        <h2>JS in hoa: {{nameDemo2.toUpperCase()}}</h2>

        <h1>{{ myName() }}</h1>

        <h2>{{ linkUrl }}</h2>
    `
})

export class Demo2Component{
    public nameDemo2 = 'Văn Tài Design';
    public linkUrl = window.location.href;

    myName(){
        return "Tôi tên là " + this.nameDemo2;
    }
}