import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayEventComponent } from './admin-display-event.component';

describe('AdminDisplayEventComponent', () => {
  let component: AdminDisplayEventComponent;
  let fixture: ComponentFixture<AdminDisplayEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDisplayEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDisplayEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
