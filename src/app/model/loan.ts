import { Client } from "./client";

export class Loan {
    id: number;
    amount: number;
    dueDate: Date;
    isLoanDelay: boolean = false;
    client: Client

  

}