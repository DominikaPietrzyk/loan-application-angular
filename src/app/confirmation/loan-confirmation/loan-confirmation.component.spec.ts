import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ClientComponent } from 'src/app/client/client.component';
import { Loan } from 'src/app/model/loan';
import { LoanService } from 'src/app/services/loan.service';


import { LoanConfirmationComponent } from './loan-confirmation.component';

describe('LoanConfirmationComponent', () => {
  let component: LoanConfirmationComponent;
  let fixture: ComponentFixture<LoanConfirmationComponent>;
  let loanService: LoanService;
  let loan: Loan;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanConfirmationComponent]
    })
      .compileComponents();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientComponent],
      imports: [ReactiveFormsModule,
        HttpClientModule,
        HttpClientTestingModule,
        RouterModule.forRoot([])],
      providers: [
        LoanService,
        LoanConfirmationComponent, {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: (id: number) => { id: 1 } } } }
        }
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanConfirmationComponent);
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


