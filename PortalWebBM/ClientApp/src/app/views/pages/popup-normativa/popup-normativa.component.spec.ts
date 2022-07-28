import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNormativaComponent } from './popup-normativa.component';

describe('PopupNormativaComponent', () => {
  let component: PopupNormativaComponent;
  let fixture: ComponentFixture<PopupNormativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupNormativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNormativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
