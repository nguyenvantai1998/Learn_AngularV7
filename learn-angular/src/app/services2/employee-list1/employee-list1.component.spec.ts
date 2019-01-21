import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeList1Component } from './employee-list1.component';

describe('EmployeeList1Component', () => {
  let component: EmployeeList1Component;
  let fixture: ComponentFixture<EmployeeList1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeList1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
