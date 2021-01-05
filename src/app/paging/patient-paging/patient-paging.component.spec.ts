import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPagingComponent } from './patient-paging.component';

describe('PatientPagingComponent', () => {
  let component: PatientPagingComponent;
  let fixture: ComponentFixture<PatientPagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
