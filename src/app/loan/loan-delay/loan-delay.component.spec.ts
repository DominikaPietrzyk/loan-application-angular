import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDelayComponent } from './loan-delay.component';

describe('LoanDelayComponent', () => {
  let component: LoanDelayComponent;
  let fixture: ComponentFixture<LoanDelayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDelayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
