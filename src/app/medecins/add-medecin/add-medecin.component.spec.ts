import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedecinComponent } from './add-medecin.component';

describe('AddMedecinComponent', () => {
  let component: AddMedecinComponent;
  let fixture: ComponentFixture<AddMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
