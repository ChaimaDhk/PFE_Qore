import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurUpcomingComponent } from './visiteur-upcoming.component';

describe('VisiteurUpcomingComponent', () => {
  let component: VisiteurUpcomingComponent;
  let fixture: ComponentFixture<VisiteurUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurUpcomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteurUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
