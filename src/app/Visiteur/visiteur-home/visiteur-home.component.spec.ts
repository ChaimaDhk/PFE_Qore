import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurHomeComponent } from './visiteur-home.component';

describe('VisiteurHomeComponent', () => {
  let component: VisiteurHomeComponent;
  let fixture: ComponentFixture<VisiteurHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteurHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
