import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCuentaComponent } from './popup-cuenta.component';

describe('PopupCuentaComponent', () => {
  let component: PopupCuentaComponent;
  let fixture: ComponentFixture<PopupCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
