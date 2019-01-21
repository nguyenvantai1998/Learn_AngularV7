import { Component } from '@angular/core';

@Component({
    selector: 'app-class',
    template: `
        <h2>Class</h2>

        <h3 class="class-one">Thêm class thuần</h3>
        <h3 [class]="classOne">Gọi class theo kiểu qua name public</h3>
        <h3 [class.class-two]="arClass">Add Css to class true of false</h3>
        <h3 [ngClass]="classObject">Add Css to class object ('ngClass thuộc tính có sẵn')</h3>
    `,
    styles:[`
        .class-one{
            color:red;
            font-weight:700;
        }
        .class-two{
            color:green;
            font-style:italic;
        }
        .class-three{
            font-size:2em;
        }
    `]
})

export class classComponent{
    public classOne = 'class-one';
    public arClass = true;
    public addObject = false;
    public classObject = {
        "class-one": !this.arClass,
        "class-two": this.arClass,
        "class-three": this.addObject
    }
}