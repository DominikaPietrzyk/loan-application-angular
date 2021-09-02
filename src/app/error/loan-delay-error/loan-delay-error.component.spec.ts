import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { LoanDelayErrorComponent } from './loan-delay-error.component';

describe('LoanDelayErrorComponent', () => {
  let component: LoanDelayErrorComponent;
  let fixture: ComponentFixture<LoanDelayErrorComponent>;
  let div: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanDelayErrorComponent],
      imports: [RouterModule.forRoot([])],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDelayErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    div = fixture.nativeElement.querySelector('div');
  });


  it('should check router link from go back', () => {
    const anchor = fixture.debugElement.query(By.css('a'));

    expect(anchor.nativeElement.getAttribute('routerLink')).toEqual('/home');
  });

  it('should check if error message is correct', () => {
    const errorMessage = 'The loan can only be extended once ! The maturity date has not changed.';
    expect(div.textContent).toEqual(errorMessage);
  });
});
