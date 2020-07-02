import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirstructComponent } from './dirstruct.component';

describe('DirstructComponent', () => {
  let component: DirstructComponent;
  let fixture: ComponentFixture<DirstructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirstructComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
