import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanFormErrorComponent } from './loan-form-error.component';

describe('LoanFormErrorComponent', () => {
  let component: LoanFormErrorComponent;
  let fixture: ComponentFixture<LoanFormErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanFormErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanFormErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
