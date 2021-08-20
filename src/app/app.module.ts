import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';

import { HomeComponent } from './home/home.component';
import { LoanFormComponent } from './loan/loan-form/loan-form.component';
import { LoanDelayComponent } from './loan/loan-delay/loan-delay.component';
import { LoanConfirmationComponent } from './confirmation/loan-confirmation/loan-confirmation.component';
import { LoanDelayConfirmationComponent } from './confirmation/loan-delay-confirmation/loan-delay-confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DelayDialogComponent } from './loan/delay-loan-dialog/delay-dialog.component';
import { LoanDelayErrorComponent } from './error/loan-delay-error/loan-delay-error.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HomeComponent,
    LoanFormComponent,
    LoanDelayComponent,
    LoanConfirmationComponent,
    LoanDelayConfirmationComponent,
    DelayDialogComponent,
    LoanDelayErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
