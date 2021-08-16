import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from 'src/app/model/loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-delay-confirmation',
  templateUrl: './loan-delay-confirmation.component.html',
  styleUrls: ['./loan-delay-confirmation.component.css']
})
export class LoanDelayConfirmationComponent implements OnInit {

  public loan : Loan

  loanId: number

  constructor(private loanService : LoanService,
    private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.getLoan();
  }

  getLoan(): void {
   const id = Number(this.route.snapshot.paramMap.get('id'));

   if(id != 0) {
     this.loanService.getLoan(id).subscribe(data => this.loan = data);
   } else {
     this.loan = new Loan(0, new Date(), false);
    }

 /* this.loanService.getLoan(this.loanId).subscribe(
      (response: Loan) => {
        console.log(response);
        this.getLoan();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );*/
  }
}
