import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesDialogComponent } from './tiles-dialog.component';

describe('TilesDialogComponent', () => {
  let component: TilesDialogComponent;
  let fixture: ComponentFixture<TilesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
