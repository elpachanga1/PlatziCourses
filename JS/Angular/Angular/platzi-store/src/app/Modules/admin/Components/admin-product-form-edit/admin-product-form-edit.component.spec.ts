import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductFormEditComponent } from './admin-product-form-edit.component';

describe('AdminProductFormEditComponent', () => {
  let component: AdminProductFormEditComponent;
  let fixture: ComponentFixture<AdminProductFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
