import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeExempleComponent } from './pipe-exemple.component';

describe('PipeExempleComponent', () => {
  let component: PipeExempleComponent;
  let fixture: ComponentFixture<PipeExempleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeExempleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
