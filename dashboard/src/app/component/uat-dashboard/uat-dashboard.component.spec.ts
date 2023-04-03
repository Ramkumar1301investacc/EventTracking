import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UatDashboardComponent } from './uat-dashboard.component';

describe('UatDashboardComponent', () => {
  let component: UatDashboardComponent;
  let fixture: ComponentFixture<UatDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UatDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UatDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
