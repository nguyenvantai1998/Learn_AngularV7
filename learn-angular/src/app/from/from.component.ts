import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from',
  template: `
    <h2>Bài học về cách lấy giá trị trên from, vfa thêm thư viện cần thiết
        để hổ trợ xử lý {{nameFrom}}
    </h2>

    <input type="text" [(ngModel)]="name">
    {{name}}
    
  `,
  styles: [``]
})
export class FromComponent implements OnInit {
  public namFrom = "From";
  public name = "";

  constructor() { }

  ngOnInit() {
  }

}
