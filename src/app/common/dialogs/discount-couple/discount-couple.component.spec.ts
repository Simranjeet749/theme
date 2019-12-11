import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountCoupleComponent } from './discount-couple.component';

describe('DiscountCoupleComponent', () => {
  let component: DiscountCoupleComponent;
  let fixture: ComponentFixture<DiscountCoupleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountCoupleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountCoupleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
