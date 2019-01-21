import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-interaction-tuongtac',
  
  /*
    c1: <h3>{{"Hello " + parentData}}</h3>
  */
  template: `
    <h2>Xử lý tương tác file, có thể dùng để chuyển trang</h2>
    <h3>{{"Hello " + name}}</h3>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./interaction-tuongtac.component.css']
})
export class InteractionTuongtacComponent implements OnInit {
  //c1: @Input() public parentData;
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hello tôi là NGUYỄN VĂN TÀI');
  }

}
