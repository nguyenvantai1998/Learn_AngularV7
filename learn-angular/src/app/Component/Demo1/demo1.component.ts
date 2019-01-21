import { Component } from '@angular/core';

@Component({
    selector: '[app-demo1]',
    template:`
       <h2>Progam demo the fisrt of {{ name }}</h2> 
    `,
    styles: [`
        h2{
            color:red;
        }
    `]
})

export class Demo1Component{
    name = 'Nguyễn Văn Tài';
}