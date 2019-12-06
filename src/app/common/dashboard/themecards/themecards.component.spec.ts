import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemecardsComponent } from './themecards.component';

describe('ThemecardsComponent', () => {
  let component: ThemecardsComponent;
  let fixture: ComponentFixture<ThemecardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemecardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
