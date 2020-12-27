import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPagingComponent } from './admin-paging.component';

describe('AdminPagingComponent', () => {
  let component: AdminPagingComponent;
  let fixture: ComponentFixture<AdminPagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
