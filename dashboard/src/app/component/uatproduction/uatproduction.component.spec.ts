import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UatproductionComponent } from './uatproduction.component';

describe('UatproductionComponent', () => {
  let component: UatproductionComponent;
  let fixture: ComponentFixture<UatproductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UatproductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UatproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
