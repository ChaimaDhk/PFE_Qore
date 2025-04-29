import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurHeaderComponent } from './visiteur-header.component';

describe('VisiteurHeaderComponent', () => {
  let component: VisiteurHeaderComponent;
  let fixture: ComponentFixture<VisiteurHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteurHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
