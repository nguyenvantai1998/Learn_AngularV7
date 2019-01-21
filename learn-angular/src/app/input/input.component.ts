import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <h2>Thẻ input</h2>
    <input type="text"  value="giatri" >

    <h3>ID</h3>
    1/ <input [id]="idInput" type="text"  value="giatri" >
    2/ <input [id]="idInput" type="text"  value="giatri" >

    <h3>Disabled</h3>
    1/ <input bind-disabled="true" type="text"  value="giatri" ><br>
    2/ <input [disabled]="myDisabled" type="text"  value="giatri" >

  `,
  styles: [`

  `]
})
export class InputComponent implements OnInit {
  public idInput = 'idInput';
  public myDisabled = true;

  constructor() { }

  ngOnInit() {
  }

}
