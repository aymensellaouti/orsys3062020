import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilsOutputComponent } from './fils-output.component';

describe('FilsOutputComponent', () => {
  let component: FilsOutputComponent;
  let fixture: ComponentFixture<FilsOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilsOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilsOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
