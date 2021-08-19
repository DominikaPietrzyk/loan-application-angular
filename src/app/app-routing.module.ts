import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from '../app/client/client.component';
import { LoanConfirmationComponent } from './confirmation/loan-confirmation/loan-confirmation.component';
import { LoanDelayConfirmationComponent } from './confirmation/loan-delay-confirmation/loan-delay-confirmation.component';
import { DelayDialogComponent } from './loan/delay-loan-dialog/delay-dialog.component';
import { HomeComponent } from './home/home.component';
import { LoanDelayComponent } from './loan/loan-delay/loan-delay.component';
import { LoanFormComponent } from './loan/loan-form/loan-form.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'clientForm/:id', component: ClientComponent },
  { path: 'clientForm/:id/loanForm', component: LoanFormComponent },
  { path: 'loanConfirmation/:id', component: LoanConfirmationComponent },
  { path: 'loanDelay', component: LoanDelayComponent },
  { path: 'delayDialog/:id', component: DelayDialogComponent },
  { path: 'delayLoanConfirmation/:id', component: LoanDelayConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
