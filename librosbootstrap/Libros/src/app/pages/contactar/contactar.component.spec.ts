import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CONTACTARComponent } from './contactar.component';

describe('CONTACTARComponent', () => {
  let component: CONTACTARComponent;
  let fixture: ComponentFixture<CONTACTARComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CONTACTARComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CONTACTARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
