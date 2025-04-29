import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurEventComponent } from './visiteur-event.component';

describe('VisiteurEventComponent', () => {
  let component: VisiteurEventComponent;
  let fixture: ComponentFixture<VisiteurEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteurEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
