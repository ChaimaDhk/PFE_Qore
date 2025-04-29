import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientWishListComponent } from './client-wish-list.component';

describe('ClientWishListComponent', () => {
  let component: ClientWishListComponent;
  let fixture: ComponentFixture<ClientWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientWishListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
