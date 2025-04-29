import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUpdatePwdComponent } from './client-update-pwd.component';

describe('ClientUpdatePwdComponent', () => {
  let component: ClientUpdatePwdComponent;
  let fixture: ComponentFixture<ClientUpdatePwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientUpdatePwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientUpdatePwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
