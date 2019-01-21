import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionTuongtacComponent } from './interaction-tuongtac.component';

describe('InteractionTuongtacComponent', () => {
  let component: InteractionTuongtacComponent;
  let fixture: ComponentFixture<InteractionTuongtacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionTuongtacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionTuongtacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
