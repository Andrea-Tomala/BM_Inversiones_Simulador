import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupIngresoComponent } from './popup-ingreso.component';

describe('PopupIngresoComponent', () => {
  let component: PopupIngresoComponent;
  let fixture: ComponentFixture<PopupIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupIngresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
