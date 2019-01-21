import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular';

  //sử lý tương tác giữa các file,gửi dữ liệu sang file khác
  public name = "Văn Tài Design";
  public message ="";
}
