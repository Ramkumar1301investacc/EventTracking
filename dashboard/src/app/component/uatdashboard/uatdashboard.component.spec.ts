import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UatdashboardComponent } from './uatdashboard.component';

describe('UatdashboardComponent', () => {
  let component: UatdashboardComponent;
  let fixture: ComponentFixture<UatdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UatdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UatdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
