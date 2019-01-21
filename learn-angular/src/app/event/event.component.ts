import { Component, ComponentFactory } from '@angular/core';

@Component({
    selector: 'app-event',
    template: `
        <h2>Bài học về event {{nameEvent}}</h2>

        1/ <button (click)="onClick()">Click event</button> <br><br>

        2/ <button (click)="onClick1()">Click event</button> 
        {{showEvent1}}<br><br>

        3/ <button (click)="onClick2($event)">Click event</button>
        {{showEvent2}}<br><br>

        4/ <button (click)="showEvent1='Bạn vừa click'">Click event</button>

    `,
    styles: [`
    
    `]
})

export class eventComponent{
    public nameEvent = "Binding";
    public showEvent1 = "";
    public showEvent2= "";

    onClick(){
        console.log('Bạn vừa click lên tôi!!!');
    }
    onClick1(){
        console.log('Bạn vừa click lên tôi!!!');
        this.showEvent1 = 'Bạn vừa click lên tôi';
    }
    onClick2(e){
        console.log(e);
        this.showEvent2 = e.type;
    }
}