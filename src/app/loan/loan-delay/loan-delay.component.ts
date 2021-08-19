import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-delay',
  templateUrl: './loan-delay.component.html',
  styleUrls: ['./loan-delay.component.css']
})

export class LoanDelayComponent implements OnInit {

  submitted = false;
  delayForm: FormGroup

  constructor(private route: ActivatedRoute, private router: Router,
    private loanService: LoanService) { }

  ngOnInit(): void {
    this.delayForm = new FormGroup({
      'id': new FormControl(null, [Validators.required]),
    })
  }

  get id() {
    return this.delayForm.get('id') as FormControl;
  }

  onSubmit() {
    console.log(this.delayForm.value);
    this.submitted = true;

    this.loanService.getLoan(this.delayForm.value.id).subscribe(Loan => {
      this.router.navigate([`/delayDialog/${Loan.id}`]);

    });
  }
}
