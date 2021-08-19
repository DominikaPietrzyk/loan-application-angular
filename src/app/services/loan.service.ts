import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Loan } from "../model/loan";
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class LoanService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addLoan(loan: Loan): Observable<Loan> {
    return this.http.post<Loan>(`${this.apiServerUrl}/api/v1/loans`, loan);
  }

  public getLoan(loanId: number): Observable<Loan> {
    return this.http.get<Loan>(`${this.apiServerUrl}/api/v1/loans/${loanId}`);
  }

  public getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${this.apiServerUrl}/api/v1/loans`);
  }

  updateLoan(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.apiServerUrl}/api/v1/loans/${id}`, value);
  }

}