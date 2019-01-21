import { Component } from '@angular/core';

@Component({
    selector:'app-ngSwitch',
    template:`
        <h2>Câu lệnh ngSwitch</h2>

        <div [ngSwitch]="color">
            <div *ngSwitchCase="'red'">Tôi là red, và tôi hiển thị</div>
            <div *ngSwitchCase="'green'">Tôi là green, và tôi hiển thị</div>
            <div *ngSwitchCase="'blue'">Tôi là blue, và tôi hiển thị</div>
            <div *ngSwitchDefault>Không ai gọi tôi nên tôi hiển thị mặt định</div>
        </div>

    `,
    styles:[`
    `]
})

export class ngSwitchComponent{
    public color = "yellow";

}