import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//14 Thư viện EmployeeService
import { EmployeeService } from './employee.service';

////////////////////////////////////////////////////////////
import { AppComponent } from './app.component';
import { EmployeeList1Component } from './services2/employee-list1/employee-list1.component';
import { EmployeeDetail1Component } from './services2/employee-detail1/employee-detail1.component';

//  Fetch Data Using HTTP - Tìm nạp dữ liệu bằng HTTP
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeList1Component,
    EmployeeDetail1Component
  ],
  imports: [
    BrowserModule,
    //  Fetch Data Using HTTP - Tìm nạp dữ liệu bằng HTTP
    HttpClientModule
  ],
  //providers: [],
  providers: [EmployeeService],//14 Gọi thư viện lquan đến EmployeeService
  bootstrap: [AppComponent]
})
export class AppModule { }
