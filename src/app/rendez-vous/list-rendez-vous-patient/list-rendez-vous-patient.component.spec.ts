import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRendezVousPatientComponent } from './list-rendez-vous-patient.component';

describe('ListRendezVousPatientComponent', () => {
  let component: ListRendezVousPatientComponent;
  let fixture: ComponentFixture<ListRendezVousPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRendezVousPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRendezVousPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
