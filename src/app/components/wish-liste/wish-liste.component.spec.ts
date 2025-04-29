import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListeComponent } from './wish-liste.component';

describe('WishListeComponent', () => {
  let component: WishListeComponent;
  let fixture: ComponentFixture<WishListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
