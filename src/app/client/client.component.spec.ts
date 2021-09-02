import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Client } from '../model/client';
import { ClientService } from '../services/client.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ClientComponent } from './client.component';


describe('ClientComponent', () => {
  let component: ClientComponent;
  let fixture: ComponentFixture<ClientComponent>;
  let clientService: ClientService;
  let client: Client;
  let router: Router;
  let url: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientComponent],
      imports: [ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        RouterTestingModule.withRoutes([]),],
      providers: [
        ClientService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    clientService = TestBed.inject(ClientService);
    router = TestBed.get(Router);
  });

  beforeEach(() => {
    client = { id: 5, firstName: 'Jan', lastName: 'Kowalski' };
  });

  it('should check if client first name is valid', () => {

    let firstName = component.clientForm.controls['firstName'];
    firstName.setValue('Jan');
    expect(firstName?.errors?.required).toBeFalsy();
    expect(firstName?.errors?.minlength).toBeFalsy();
    expect(firstName?.errors?.maxlength).toBeFalsy();
  });

  it('should check if client first name is invalid - min lenght error', () => {

    let firstName = component.clientForm.controls['firstName'];
    firstName.setValue('J');
    expect(firstName?.errors?.required).toBeFalsy();
    expect(firstName?.errors?.minlength).toBeTruthy();
    expect(firstName?.errors?.maxlength).toBeFalsy();
  });

  it('should check if client first name is invalid - required error', () => {

    let firstName = component.clientForm.controls['firstName'];
    firstName.setValue('');
    expect(firstName?.errors?.required).toBeTruthy();
  });

  it('should check if client last name is valid', () => {

    let lastName = component.clientForm.controls['lastName'];
    lastName.setValue('Kowalski');
    expect(lastName?.errors?.required).toBeFalsy();
    expect(lastName?.errors?.minlength).toBeFalsy();
    expect(lastName?.errors?.maxlength).toBeFalsy();
  });

  it('should check if client last name is invalid - min lenght error', () => {

    let lastName = component.clientForm.controls['lastName'];
    lastName.setValue('Ko');
    expect(lastName?.errors?.required).toBeFalsy();
    expect(lastName?.errors?.minlength).toBeTruthy();
    expect(lastName?.errors?.maxlength).toBeFalsy();
  });

  it('should check if client last name is invalid - required error', () => {

    let lastName = component.clientForm.controls['lastName'];
    lastName.setValue('');
    expect(lastName?.errors?.required).toBeTruthy();
  });

  it(`should navigate to template`, inject(
    [Router],
    (router: Router) => {
      let id = 5;
      spyOn(router, "navigate").and.stub();
      router.navigate(["/clientForm/loanForm"], {
        queryParams: { templateId: id }
      });
      expect(router.navigate).toHaveBeenCalledWith(["/clientForm/loanForm"], {
        queryParams: { templateId: id }
      });
    }
  ));

  it('expects addClinet() to have been called', () => {
    spyOn(clientService, 'addClient').and.callThrough();
    clientService.addClient(client);
    expect(clientService.addClient).toHaveBeenCalled();
  });

  it('expects onSubmit() to have been called', () => {
    spyOn(component, 'onSubmit').and.callThrough();
    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
