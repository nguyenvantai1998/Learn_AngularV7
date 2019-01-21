import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//2 Thư viện bổ sung cho routing
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

//1 Bổ sung thêm routing
const routes: Routes = [
  // Trang mặt định khi load
  //Cách cơ bản { path: '', component: DepartmentListComponent},

  /*Cách nâng cao 
    - Quy định chỉ có 1 page hiển thị dù cho truy cập bát cứ link nào: pathMatch: 'prefix'
    - Link được tất cả các page khi dùng : pathMatch: 'full'
  */
  { path: '', redirectTo:'/departments',pathMatch: 'full'},

  // List page
  { path: 'departments', component: DepartmentListComponent},
  { path: 'departments/:id', component: DepartmentDetailComponent},

  { path: 'employees', component: EmployeeListComponent},


  //Trang không tồn tại
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  // imports: [
  //   CommonModule
  // ]
  //6
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// 3 xuất hai giá trị từ component
export const routingComponents = [
                                  DepartmentListComponent,
                                  DepartmentDetailComponent,

                                  EmployeeListComponent,
                                  PageNotFoundComponent
                                ]
