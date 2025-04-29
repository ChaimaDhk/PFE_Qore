import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurContactComponent } from './visiteur-contact.component';

describe('VisiteurContactComponent', () => {
  let component: VisiteurContactComponent;
  let fixture: ComponentFixture<VisiteurContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteurContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
