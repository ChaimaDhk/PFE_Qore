import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactVisiteurComponent } from './contact-visiteur.component';

describe('ContactVisiteurComponent', () => {
  let component: ContactVisiteurComponent;
  let fixture: ComponentFixture<ContactVisiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactVisiteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
