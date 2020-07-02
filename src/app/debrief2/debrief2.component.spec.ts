import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Debrief2Component } from './debrief2.component';

describe('Debrief2Component', () => {
  let component: Debrief2Component;
  let fixture: ComponentFixture<Debrief2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Debrief2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Debrief2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
