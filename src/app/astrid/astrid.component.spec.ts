import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstridComponent } from './astrid.component';

describe('AstridComponent', () => {
  let component: AstridComponent;
  let fixture: ComponentFixture<AstridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
