import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUpcomingComponent } from './client-upcoming.component';

describe('ClientUpcomingComponent', () => {
  let component: ClientUpcomingComponent;
  let fixture: ComponentFixture<ClientUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientUpcomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
