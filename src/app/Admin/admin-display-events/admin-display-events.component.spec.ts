import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayEventsComponent } from './admin-display-events.component';

describe('AdminDisplayEventsComponent', () => {
  let component: AdminDisplayEventsComponent;
  let fixture: ComponentFixture<AdminDisplayEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDisplayEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDisplayEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
