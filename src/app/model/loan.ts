export class Loan{
    id : number;
    amount : number;
    dueDate : Date;
    isLoanDelay : boolean;
    
    constructor(
       amount : number,
       dueDate : Date,
       isLoanDelay : boolean,
    ){}
    
}