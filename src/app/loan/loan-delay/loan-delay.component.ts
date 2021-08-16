import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from 'src/app/model/loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-delay',
  templateUrl: './loan-delay.component.html',
  styleUrls: ['./loan-delay.component.css']
})
export class LoanDelayComponent implements OnInit {

  submitted = false;
  delayLoanModel= new Loan(4500, new Date(Date.parse("16-08-2021")), false);
  constructor(private route: ActivatedRoute, private router: Router,
    private loanService: LoanService) { }

  ngOnInit(): void {
  }

  // onSubmit() {
  //   console.log(this.delayLoanModel);
  //   this.submitted = true;
  //   //this.loanService.addLoan(this.loanDelayModel).subscribe(Loan => this.loanDelayModel = Loan);
  //   this.router.navigate(["/delayDialog"]);
  // }

  onSubmit() {
    console.log(this.delayLoanModel);
    this.submitted = true;
    this.loanService.addLoan(this.delayLoanModel).subscribe(Loan => {
      this.router.navigate([`/delayDialog/${Loan.id}`]);
    });
}
}
