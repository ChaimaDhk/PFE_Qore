import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurAboutComponent } from './visiteur-about.component';

describe('VisiteurAboutComponent', () => {
  let component: VisiteurAboutComponent;
  let fixture: ComponentFixture<VisiteurAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteurAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
