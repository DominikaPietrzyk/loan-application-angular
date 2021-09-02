import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from 'src/app/model/loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-confirmation',
  templateUrl: './loan-confirmation.component.html',
  styleUrls: ['./loan-confirmation.component.css']
})

export class LoanConfirmationComponent implements OnInit {
  public loan: Loan
  loanId: number

  constructor(private loanService: LoanService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getLoan();
  }

  getLoan(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id != 0) {
      this.loanService.getLoan(id).subscribe(data => this.loan = data);
    }
  }
}
