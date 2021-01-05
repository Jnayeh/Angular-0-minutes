import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMecedinComponent } from './home-mecedin.component';

describe('HomeMecedinComponent', () => {
  let component: HomeMecedinComponent;
  let fixture: ComponentFixture<HomeMecedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMecedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMecedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
