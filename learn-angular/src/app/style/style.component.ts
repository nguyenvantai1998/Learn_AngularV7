import { Component } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
    selector: 'app-style',
    template: `
        <h2>Bài học liên quan đến style {{nameCSS}}</h2>

        <h3 [style.color]="'orange'">Thêm thuộc tính css kiểu thuần</h3>
        <h3 [style.color]="addTrueFalse ? 'red' : 'green' ">Thêm thuộc tính css xét theo kiểu true false</h3>
        <h3 [style.color]="addCssCB">Thêm thuộc tính css bằng cách cơ bản</h3>
        <h3 [ngStyle]="cssObject">Thêm thuộc tính css bằng object</h3>
     `,
    styles: [`
    `]
})

export class styleComponent{
    public nameCSS = "CSS";

    public addTrueFalse = false;
    public addCssCB = "yellow";

    public cssObject = {
        color: "red",
        fontSize: "2em",
        fontStyle: "italic"
    }
}