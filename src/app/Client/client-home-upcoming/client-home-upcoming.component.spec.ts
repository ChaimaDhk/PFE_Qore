import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHomeUpcomingComponent } from './client-home-upcoming.component';

describe('ClientHomeUpcomingComponent', () => {
  let component: ClientHomeUpcomingComponent;
  let fixture: ComponentFixture<ClientHomeUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientHomeUpcomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHomeUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
