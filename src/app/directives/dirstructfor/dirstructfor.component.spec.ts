import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirstructforComponent } from './dirstructfor.component';

describe('DirstructforComponent', () => {
  let component: DirstructforComponent;
  let fixture: ComponentFixture<DirstructforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirstructforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirstructforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
