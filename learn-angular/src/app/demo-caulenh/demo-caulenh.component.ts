import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-caulenh',
  template: `
    <h1>Tôi tên là {{nameTitle}}</h1>
    `
})
export class DemoCaulenhComponent implements OnInit {

  nameTitle = 'Văn Tài';

  constructor() { }

  ngOnInit() {
  }

}
