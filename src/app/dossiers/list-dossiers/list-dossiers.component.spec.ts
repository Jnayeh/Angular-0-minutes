import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDossiersComponent } from './list-dossiers.component';

describe('ListDossiersComponent', () => {
  let component: ListDossiersComponent;
  let fixture: ComponentFixture<ListDossiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDossiersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDossiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
