import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentUatComponent } from './enrollment-uat.component';

describe('EnrollmentUatComponent', () => {
  let component: EnrollmentUatComponent;
  let fixture: ComponentFixture<EnrollmentUatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentUatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentUatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
