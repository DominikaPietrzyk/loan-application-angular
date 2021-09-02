import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { Loan } from 'src/app/model/loan';
import { LoanService } from 'src/app/services/loan.service';

import { LoanDelayConfirmationComponent } from './loan-delay-confirmation.component';

describe('LoanDelayConfirmationComponent', () => {
  let component: LoanDelayConfirmationComponent;
  let fixture: ComponentFixture<LoanDelayConfirmationComponent>;

  let loanService: LoanService;
  let loan: Loan;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanDelayConfirmationComponent],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDelayConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    loanService = TestBed.inject(LoanService);
  });

  beforeEach(() => {
    loan = { id: 1, amount: 5400, dueDate: new Date('23-05-2022'), loanDelay: false };
    spyOn(loanService, 'getLoan').and.callThrough();
  });


  it('expects getLoan() to have been called', () => {
    loanService.getLoan(loan.id);
    expect(loanService.getLoan).toHaveBeenCalled();
  });
});
