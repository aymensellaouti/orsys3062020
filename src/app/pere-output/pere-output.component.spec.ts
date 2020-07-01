import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PereOutputComponent } from './pere-output.component';

describe('PereOutputComponent', () => {
  let component: PereOutputComponent;
  let fixture: ComponentFixture<PereOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PereOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PereOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
