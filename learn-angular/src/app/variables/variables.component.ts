import { Component } from '@angular/core';

@Component ({
    selector: 'app-value',
    template: `
        <h2>Bài học về {{nameValue}}</h2>

        <input type="text" value="" #myValue />
        <button (click)="onClick(myValue.value)">Click log</button>
    `,
    styles: [`
    `]
})

export class variablesComponent{
    public nameValue = "Variables";

    onClick(value){
        console.log(value);
    }
}