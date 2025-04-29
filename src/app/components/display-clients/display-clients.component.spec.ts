import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayClientsComponent } from './display-clients.component';

describe('DisplayClientsComponent', () => {
  let component: DisplayClientsComponent;
  let fixture: ComponentFixture<DisplayClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
