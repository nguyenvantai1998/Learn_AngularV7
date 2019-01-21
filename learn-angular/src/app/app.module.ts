import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//7 Thử viện bổ sung cho from
import { FormsModule} from '@angular/forms';
//14 Thư viện EmployeeService
import { EmployeeService } from './employee.service';

////////////////////////////////////////////////////////////
import { AppComponent } from './app.component';
import { Demo1Component } from './Component/Demo1/demo1.component';
import { DemoCaulenhComponent } from './demo-caulenh/demo-caulenh.component';
import { Demo2Component } from './Component/Demo2/Demo2.component';
import { InputComponent } from './input/input.component';
import { classComponent } from './class/class.component';
import { styleComponent } from './style/style.component';
import { eventComponent } from './event/event.component';
import { variablesComponent } from './variables/variables.component';
import { FromComponent } from './from/from.component';
import { directiveComponent } from './directive/directive.component';
import { ngSwitchComponent } from './directive/ngSwitch.component';
import { ngForComponent } from './directive/ngFor.component';
import { InteractionTuongtacComponent } from './interaction-tuongtac/interaction-tuongtac.component';
import { PipesComponent } from './pipes/pipes.component';
import { employeeListComponent } from './services/employee-list.component';
import { employeeDetailComponent } from './services/employee-detail.component';
import { EmployeeList1Component } from './services2/employee-list1/employee-list1.component';
import { EmployeeDetail1Component } from './services2/employee-detail1/employee-detail1.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    DemoCaulenhComponent,
    Demo2Component,
    InputComponent,
    classComponent,
    styleComponent,
    eventComponent,
    variablesComponent,
    FromComponent,
    directiveComponent,
    ngSwitchComponent,
    ngForComponent,
    InteractionTuongtacComponent,
    PipesComponent,
    employeeListComponent,
    employeeDetailComponent,
    EmployeeList1Component,
    EmployeeDetail1Component,
  ],
  imports: [
    BrowserModule,
    FormsModule//7 Bổ sung thư viện form
  ],
  //providers: [],
  providers: [EmployeeService],//14 Gọi thư viện lquan đến EmployeeService
  bootstrap: [AppComponent]
})
export class AppModule { }
