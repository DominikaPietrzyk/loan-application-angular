import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoanFormComponent } from './loan-form.component';

describe('LoanFormComponent', () => {
  let component: LoanFormComponent;
  let fixture: ComponentFixture<LoanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanFormComponent],
      imports: [ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot([])],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check if loan amount is valid', () => {

    let amount = component.loanForm.controls['amount'];
    amount.setValue('3240');
    expect(amount?.errors?.required).toBeFalsy();
    expect(amount?.errors?.min).toBeFalsy();
    expect(amount?.errors?.max).toBeFalsy();
  });

  it('should check if loan amount is invalid - required', () => {

    let amount = component.loanForm.controls['amount'];
    amount.setValue('');
    expect(amount?.errors?.required).toBeTruthy();
  });

  it('should check if loan amount is invalid - max', () => {

    let amount = component.loanForm.controls['amount'];

    amount.setValue('30001');
    expect(amount?.errors?.max).toBeTruthy();
  });

  it('should check if loan amount is invalid - min', () => {

    let amount = component.loanForm.controls['amount'];

    amount.setValue('0');
    expect(amount?.errors?.min).toBeTruthy();
  });

  it('should check if loan due date is valid', () => {

    let dueDate = component.loanForm.controls['dueDate'];
    dueDate.setValue(new Date('12-12-2021'));
    expect(dueDate?.errors?.required).toBeFalsy();
    expect(dueDate?.errors?.validateDueDate).toBeFalsy();
    expect(dueDate?.errors?.hoursValidation).toBeTruthy();
  });

});
