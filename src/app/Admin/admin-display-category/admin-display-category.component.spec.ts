import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayCategoryComponent } from './admin-display-category.component';

describe('AdminDisplayCategoryComponent', () => {
  let component: AdminDisplayCategoryComponent;
  let fixture: ComponentFixture<AdminDisplayCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDisplayCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDisplayCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
