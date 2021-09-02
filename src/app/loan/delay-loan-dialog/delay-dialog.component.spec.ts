import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Loan } from 'src/app/model/loan';
import { LoanService } from 'src/app/services/loan.service';
import { DelayDialogComponent } from './delay-dialog.component';

describe('DelayDialogComponent', () => {
  let component: DelayDialogComponent;
  let fixture: ComponentFixture<DelayDialogComponent>;
  let p: HTMLElement;
  let loanService: LoanService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  let loan: Loan;
  let router: Router;
  let url: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DelayDialogComponent],
      imports: [RouterModule.forRoot([]),
        FormsModule,
        HttpClientModule,
        HttpClientTestingModule,
      RouterTestingModule.withRoutes([]),],
      providers: [
        LoanService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    p = fixture.nativeElement.querySelector('div');
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    loanService = TestBed.inject(LoanService);
    router = TestBed.get(Router);

  });

  it('should check router link from button with no', () => {
    const anchor = fixture.debugElement.query(By.css('a'));
    expect(anchor.nativeElement.getAttribute('routerLink')).toEqual('/home');
  });

  it('should check if question is correct', () => {
    const text = 'Do you want to extend your loan repayment by 14 days?';
    expect(p.textContent).toEqual(text);
  });

  beforeEach(() => {
    loan = { id: 1, amount: 5400, dueDate: new Date('23-05-2022'), loanDelay: false };

  });

  it('expects getLoan() to have been called', () => {
    spyOn(loanService, 'getLoan').and.callThrough();
    loanService.getLoan(loan.id);
    expect(loanService.getLoan).toHaveBeenCalled();
  });

  it('expects updateLoan() to have been called', () => {
    spyOn(loanService, 'updateLoan').and.callThrough();
    loanService.updateLoan(loan.id, loan);
    expect(loanService.updateLoan).toHaveBeenCalled();
  });

  it('should navigate to error page', () => {
    const navigateSpy = spyOn(router, 'navigate');
    url = [`/loanDelayError`];
    component.goToErrorPage();
    expect(navigateSpy).toHaveBeenCalledWith(url);
  });

  it('should navigate to confirmation', () => {
    const navigateSpy = spyOn(router, 'navigate');
    url = [`/delayLoanConfirmation/${undefined}`];
    component.goToConfirmation();
    expect(navigateSpy).toHaveBeenCalledWith(url);
  });

});
