import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurEventsComponent } from './visiteur-events.component';

describe('VisiteurEventsComponent', () => {
  let component: VisiteurEventsComponent;
  let fixture: ComponentFixture<VisiteurEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteurEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
