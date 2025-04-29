import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayUsersComponent } from './admin-display-users.component';

describe('AdminDisplayUsersComponent', () => {
  let component: AdminDisplayUsersComponent;
  let fixture: ComponentFixture<AdminDisplayUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDisplayUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDisplayUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
