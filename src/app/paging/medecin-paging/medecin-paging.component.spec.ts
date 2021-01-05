import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinPagingComponent } from './medecin-paging.component';

describe('MedecinPagingComponent', () => {
  let component: MedecinPagingComponent;
  let fixture: ComponentFixture<MedecinPagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedecinPagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
