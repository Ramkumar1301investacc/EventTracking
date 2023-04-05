import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productionstoryboard1Component } from './productionstoryboard1.component';

describe('Productionstoryboard1Component', () => {
  let component: Productionstoryboard1Component;
  let fixture: ComponentFixture<Productionstoryboard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Productionstoryboard1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productionstoryboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
