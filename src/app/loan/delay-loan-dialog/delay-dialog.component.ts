import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from 'src/app/model/loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-delay-dialog',
  templateUrl: './delay-dialog.component.html',
  styleUrls: ['./delay-dialog.component.css']
})

export class DelayDialogComponent implements OnInit {
  submitted = false;
  loan: Loan
  id: number

  constructor(private route: ActivatedRoute, private router: Router, private loanService: LoanService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.loanService.getLoan(this.id)
      .subscribe(data => {
        console.log(data)
        this.loan = data;
        this.loan.dueDate = new Date(data.dueDate)
      }, error => console.log(error));
  }

  updateLoan() {

    if (this.loan.loanDelay == true) {
      this.goToErrorPage();
    }

    if (this.loan.loanDelay == false) {
      this.updateLoanDate();
      this.updateIsLoanDelay();

      this.loanService.updateLoan(this.id, this.loan)
        .subscribe(data => {
          console.log(data);
          this.goToConfirmation();
        }, error => console.log(error));

    }
  }

  updateLoanDate() {
    this.loan.dueDate.setDate(this.loan.dueDate.getDate() + 14);
  }

  updateIsLoanDelay() {
    this.loan.loanDelay = true;
  }

  onSubmit() {
    this.updateLoan();
  }

  goToConfirmation() {
    this.router.navigate([`/delayLoanConfirmation/${this.id}`]);
  }

  goToErrorPage() {
    this.router.navigate([`/loanDelayError`]);
  }
}
