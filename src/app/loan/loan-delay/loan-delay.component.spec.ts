import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { LoanDelayComponent } from './loan-delay.component';

describe('LoanDelayComponent', () => {
  let component: LoanDelayComponent;
  let fixture: ComponentFixture<LoanDelayComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanDelayComponent],
      imports: [ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot([])],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check if loan id is valid', () => {

    let id = component.delayForm.controls['id'];
    id.setValue('1');
    expect(id?.errors?.required).toBeFalsy();
  });

  it('should check if loan id is invalid', () => {

    let id = component.delayForm.controls['id'];
    id.setValue('');
    expect(id?.errors?.required).toBeTruthy();
  });

});
