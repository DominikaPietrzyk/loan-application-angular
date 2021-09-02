import { HttpClient, HttpResponse } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoanService } from "./loan.service";
import { Loan } from "../model/loan";

describe('LoanService.addLoan()', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let loanService: LoanService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                LoanService
            ]
        });

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        loanService = TestBed.inject(LoanService); 
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should add an loan and return it', () => {
        const loan: Loan = { id: 1, amount: 5400, dueDate: new Date('23-05-2022'), loanDelay: false };

        loanService.addLoan(loan).subscribe(
            data => expect(data).toEqual(loan, 'should return the loans'),
            fail
        );

        const req = httpTestingController.expectOne("http://localhost:8080/api/v1/loans");
        expect(req.request.method).toEqual('POST');
        expect(req.request.body).toEqual(loan);

        const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: loan });
        req.event(expectedResponse);
    });
})

describe('LoanService.getLoans()', () => {
    let loans: Loan[];
    let httpTestingController: HttpTestingController;
    let loanService: LoanService;
    let httpClient: HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                LoanService
            ]
        });

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        loanService = TestBed.inject(LoanService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    beforeEach(() => {
        loans = [
            { id: 1, amount: 5400, dueDate: new Date('23-05-2022'), loanDelay: false },
            { id: 2, amount: 3500, dueDate: new Date('23-12-2023'), loanDelay: true }
        ] as Loan[];
    });

    it('should return expected clients by calling once', () => {
        loanService.getLoans().subscribe(
            data => expect(data).toEqual(loans, 'should return expected loans'),
            fail
        );

        const req = httpTestingController.expectOne("http://localhost:8080/api/v1/loans");
        expect(req.request.method).toEqual('GET');

        req.flush(loans);
    });
});

describe('LoanService.getLoan()', () => {
    let loan: Loan;
    let httpTestingController: HttpTestingController;
    let loanService: LoanService;
    let httpClient: HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                LoanService
            ]
        });

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        loanService = TestBed.inject(LoanService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    beforeEach(() => {
        loan = { id: 1, amount: 5400, dueDate: new Date('23-05-2022'), loanDelay: false }
    });

    it('should return expected loan by id', () => {
        loanService.getLoan(1).subscribe(
            data => expect(data).toEqual(loan, 'should return expected loan'),
            fail
        );

        const req = httpTestingController.expectOne("http://localhost:8080/api/v1/loans/1");
        expect(req.request.method).toEqual('GET');

        req.flush(loan);
    });
});

describe('LoanService.updateLoan()', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let loanService: LoanService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                LoanService
            ]
        });

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        loanService = TestBed.inject(LoanService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should update an loan and return it', () => {
        const loan: Loan = { id: 1, amount: 5400, dueDate: new Date('23-05-2022'), loanDelay: false };

        loanService.updateLoan(1, loan).subscribe(
            data => expect(data).toEqual(loan, 'should return the loan'),
            fail
        );

        const req = httpTestingController.expectOne("http://localhost:8080/api/v1/loans/1");
        expect(req.request.method).toEqual('PUT');
        expect(req.request.body).toEqual(loan);

        const expectedResponse = new HttpResponse({ status: 200, statusText: 'Ok', body: loan });
        req.event(expectedResponse);
    });
})
