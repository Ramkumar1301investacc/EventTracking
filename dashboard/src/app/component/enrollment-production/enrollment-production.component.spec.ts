import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentProductionComponent } from './enrollment-production.component';

describe('EnrollmentProductionComponent', () => {
  let component: EnrollmentProductionComponent;
  let fixture: ComponentFixture<EnrollmentProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
