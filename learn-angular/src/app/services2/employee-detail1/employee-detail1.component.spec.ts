import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetail1Component } from './employee-detail1.component';

describe('EmployeeDetail1Component', () => {
  let component: EmployeeDetail1Component;
  let fixture: ComponentFixture<EmployeeDetail1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetail1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
