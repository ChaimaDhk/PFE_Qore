import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurSearchComponent } from './visiteur-search.component';

describe('VisiteurSearchComponent', () => {
  let component: VisiteurSearchComponent;
  let fixture: ComponentFixture<VisiteurSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteurSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
