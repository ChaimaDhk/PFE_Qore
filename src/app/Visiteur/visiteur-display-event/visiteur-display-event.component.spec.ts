import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurDisplayEventComponent } from './visiteur-display-event.component';

describe('VisiteurDisplayEventComponent', () => {
  let component: VisiteurDisplayEventComponent;
  let fixture: ComponentFixture<VisiteurDisplayEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurDisplayEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteurDisplayEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
