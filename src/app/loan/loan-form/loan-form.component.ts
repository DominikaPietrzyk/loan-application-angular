import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent implements OnInit {

  loanForm: FormGroup;
  submitted = false;

  constructor(private loanService: LoanService,
    private route: ActivatedRoute, private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.loanForm = new FormGroup({
      'amount': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(30000)]),
      'dueDate': new FormControl(null, [Validators.required, this.validateDueDate, this.hoursValidation])
    })
  }

  validateDueDate(c: FormControl) {
    const dueDate = new Date(c.value);
    const actualDate = new Date();
    actualDate.setHours(0, 0, 0, 0);

    const isValid = dueDate >= actualDate;

    return isValid ? null : {
      validateDueDate: {
        valid: true
      }
    };
  }

  hoursValidation(c: FormControl){
    const actualDateTime = new Date();
    const hours = actualDateTime.getHours();

    const isValid = hours >= 6 && hours < 24 ;

    return isValid ? null : {
      hoursValidation: {
        valid: true
      }
    };
  }

  get amount(){
    return this.loanForm.get('amount') as FormControl;
  }

  get dueDate(){
    return this.loanForm.get('dueDate') as FormControl;
  }

  onSubmit() {
    console.log(this.loanForm.value);
    this.submitted = true;
    this.loanService.addLoan(this.loanForm.value).subscribe(Loan => {
      this.router.navigate([`/loanConfirmation/${Loan.id}`]);
    });
  }
}
