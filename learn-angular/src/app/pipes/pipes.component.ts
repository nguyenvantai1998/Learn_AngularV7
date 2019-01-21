import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <h2>Bài học về pipes</h2>

    <h3>{{name}}</h3>
    <h3>{{name | lowercase}}</h3>
    <h3>{{name | uppercase}}</h3>
    <h3>{{message | titlecase}}</h3>
    <h3>{{name | slice:3:5}}</h3>
    <h3>{{person | json}}</h3>

    <h3>{{1.234 | number: '1.2-3'}}</h3>
    <h3>{{1.234 | number: '3.4-5'}}</h3>
    <h3>{{1.234 | number: '3.1-2'}}</h3>

    <h3>{{0.25 | percent }}</h3>

    <h3>{{0.25 | currency }}</h3>
    <h3>{{0.25 | currency: 'GBP'}}</h3>
    <h3>{{0.25 | currency: 'GBP': 'code' }}</h3>
    <h3>{{0.25 | currency: 'EUR': 'code' }}</h3>

    <h3>{{ date }}</h3>
    <h3>{{ date | date:'short' }}</h3>
    <h3>{{ date | date:'shortDate' }}</h3>
    <h3>{{ date | date:'shortTime' }}</h3>


  `,
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public name = "Bài học về pipes của tôi nè";
  public message = "Chào mừng đến với buổi học pipes";
  public person={
    "firstName": "Nguyễn",
    "lastName" : "Văn Tài"
  }
  public date = new Date;


  constructor() { }

  ngOnInit() {
  }

}
