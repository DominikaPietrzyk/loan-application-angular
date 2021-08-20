import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../model/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {

  clientForm: FormGroup;
  submitted = false;

  constructor(private clientService: ClientService,
    private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.clientForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      'lastName': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)])
    })
  }

  get firstName() {
    return this.clientForm.get('firstName') as FormControl;
  }

  get lastName() {
    return this.clientForm.get('lastName') as FormControl;
  }

  onSubmit() {
    console.log(this.clientForm.value);
    this.submitted = true;
    this.clientService.addClient(this.clientForm.value).subscribe(Client => {
      this.router.navigate([`clientForm/${Client.id}/loanForm`]);
    });
  }
}
