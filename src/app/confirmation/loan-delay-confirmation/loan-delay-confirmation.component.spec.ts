import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDelayConfirmationComponent } from './loan-delay-confirmation.component';

describe('LoanDelayConfirmationComponent', () => {
  let component: LoanDelayConfirmationComponent;
  let fixture: ComponentFixture<LoanDelayConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDelayConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDelayConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
