import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from 'src/app/model/loan';
import { LoanService } from 'src/app/services/loan.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-delay-dialog',
  templateUrl: './delay-dialog.component.html',
  styleUrls: ['./delay-dialog.component.css']
})

export class DelayDialogComponent implements OnInit {
  submitted = false;
  loan: Loan
  id: number
  date: Date;



  constructor(private route: ActivatedRoute, private router: Router, private loanService: LoanService) { }

  ngOnInit(): void {

    this.loan = new Loan();

    this.id = this.route.snapshot.params['id'];

    this.loanService.getLoan(this.id)
      .subscribe(data => {
        console.log(data)
        this.loan = data;
        this.loan.dueDate = new Date(data.dueDate)
      }, error => console.log(error));
  }

  updateLoan() {
    this.loanService.updateLoan(this.id, this.loan)
      .subscribe(data => {
        console.log(data);
       this.loan.dueDate = this.updateLoanDate();
        this.gotoConfirmation();
      }, error => console.log(error));
      console.log(this.loan);
  }


  updateLoanDate() : any {
    console.log(this.loan.dueDate);
    console.log(this.loan.isLoanDelay);
    console.log(this.loan.dueDate.getDate());
    this.loan.dueDate.setDate(this.loan.dueDate.getDate() + 14);
    console.log(this.loan.dueDate);
  }

  onSubmit() {
    this.updateLoan();
  }

  gotoConfirmation() {
    this.router.navigate([`/delayLoanConfirmation/${this.id}`]);
  }
}
