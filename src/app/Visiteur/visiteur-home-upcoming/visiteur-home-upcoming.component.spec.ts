import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurHomeUpcomingComponent } from './visiteur-home-upcoming.component';

describe('VisiteurHomeUpcomingComponent', () => {
  let component: VisiteurHomeUpcomingComponent;
  let fixture: ComponentFixture<VisiteurHomeUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurHomeUpcomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteurHomeUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
