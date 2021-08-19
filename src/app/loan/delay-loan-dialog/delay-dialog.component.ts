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
  date: Date;

  constructor(private route: ActivatedRoute, private router: Router, private loanService: LoanService) { }

  ngOnInit(): void {

    this.loan = new Loan();

    this.id = this.route.snapshot.params['id'];

    this.loanService.getLoan(this.id)
      .subscribe(data => {
        console.log(data)
        this.loan = data;
      }, error => console.log(error));
  }

  // onSubmit() {
  //   this.submitted = true;
  //   const id = Number(this.route.snapshot.paramMap.get('id'));

  //   if (id != 0) {
  //     this.loanService.getLoan(id).subscribe(data => this.loan = data);
  //   }

  //   this.date = new Date();
  //   this.date.setDate(this.date.getDate() + 14);
  //   console.log(this.date);

  //   this.router.navigate([`/delayLoanConfirmation/${id}`]);
  // }

  updateLoan() {
    this.loanService.updateLoan(this.id, this.loan)
      .subscribe(data => {
        console.log(data);
        this.loan = new Loan();
        //  this.loan.dueDate = this.updateLoanDate();
        this.gotoConfirmation();
      }, error => console.log(error));
  }


  updateLoanDate() {
    return this.loan.dueDate.setDate(this.loan.dueDate.getDate() + 14);
  }

  onSubmit() {
    this.updateLoan();
  }

  gotoConfirmation() {
    this.router.navigate([`/delayLoanConfirmation/${this.id}`]);
  }
}
