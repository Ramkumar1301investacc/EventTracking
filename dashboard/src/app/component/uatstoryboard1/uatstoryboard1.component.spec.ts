import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uatstoryboard1Component } from './uatstoryboard1.component';

describe('Uatstoryboard1Component', () => {
  let component: Uatstoryboard1Component;
  let fixture: ComponentFixture<Uatstoryboard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uatstoryboard1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uatstoryboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
