import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDisplayEventComponent } from './client-display-event.component';

describe('ClientDisplayEventComponent', () => {
  let component: ClientDisplayEventComponent;
  let fixture: ComponentFixture<ClientDisplayEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDisplayEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDisplayEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
