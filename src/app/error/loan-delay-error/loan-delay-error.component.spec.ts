import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDelayErrorComponent } from './loan-delay-error.component';

describe('LoanDelayErrorComponent', () => {
  let component: LoanDelayErrorComponent;
  let fixture: ComponentFixture<LoanDelayErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDelayErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDelayErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
