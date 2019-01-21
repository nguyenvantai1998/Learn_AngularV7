import { Component } from '@angular/core';

@Component({
    selector: 'app-ngFor',
    template: `
        <h2>Câu lệnh ngFor</h2>

        <h3>index</h3>
        <div *ngFor="let color of colors; index as i">
           {{i}} {{color}}
        </div>

        <h3>first</h3>
        <div *ngFor="let color of colors; first as f">
           {{f}} {{color}}
        </div>

        <h3>last</h3>
        <div *ngFor="let color of colors; last as l">
           {{l}} {{color}}
        </div>

        <h3>odd</h3>
        <div *ngFor="let color of colors; odd as o">
           {{o}} {{color}}
        </div>

        <h3>even</h3>
        <div *ngFor="let color of colors; even as e">
           {{e}} {{color}}
        </div>
    `,
    styles:[`
    `]
})

export class ngForComponent{
    public colors = ["red","blue","green","yellow"];
}