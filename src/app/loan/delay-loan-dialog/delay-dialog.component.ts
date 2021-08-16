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
  public loan : Loan
  LonaId : number
  
  constructor(private route: ActivatedRoute, private router: Router,private loanService: LoanService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if(id != 0) {
      this.loanService.getLoan(id).subscribe(data => this.loan = data);
    } else {
      this.loan = new Loan(0, new Date(), false);
     }
    this.router.navigate([`/delayLoanConfirmation/${id}`]);
  }
}
