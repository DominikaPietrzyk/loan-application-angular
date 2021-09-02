import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterModule.forRoot([])],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check router link from get a loan button', () => {
    const anchor = fixture.debugElement.query(By.css('a'));

    expect(anchor.nativeElement.getAttribute('routerLink')).toEqual('/clientForm');
  });

  it('should check router link from delay a loan button', () => {
    const anchor = fixture.debugElement.queryAll(By.css('a'));

    expect(anchor[1].nativeElement.getAttribute('routerLink')).toEqual('/loanDelay');
  });

});
