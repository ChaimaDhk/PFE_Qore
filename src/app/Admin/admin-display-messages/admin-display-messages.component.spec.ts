import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayMessagesComponent } from './admin-display-messages.component';

describe('AdminDisplayMessagesComponent', () => {
  let component: AdminDisplayMessagesComponent;
  let fixture: ComponentFixture<AdminDisplayMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDisplayMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDisplayMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
