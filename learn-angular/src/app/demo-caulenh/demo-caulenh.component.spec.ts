import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCaulenhComponent } from './demo-caulenh.component';

describe('DemoCaulenhComponent', () => {
  let component: DemoCaulenhComponent;
  let fixture: ComponentFixture<DemoCaulenhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCaulenhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCaulenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
