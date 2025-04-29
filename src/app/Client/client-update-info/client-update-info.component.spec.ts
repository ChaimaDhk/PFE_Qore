import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUpdateInfoComponent } from './client-update-info.component';

describe('ClientUpdateInfoComponent', () => {
  let component: ClientUpdateInfoComponent;
  let fixture: ComponentFixture<ClientUpdateInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientUpdateInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientUpdateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
