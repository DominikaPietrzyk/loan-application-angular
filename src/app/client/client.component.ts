import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../model/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  submitted = false;
  clientModel = new Client("Jan", "Kowalski");

  constructor(private clientService: ClientService,
    private route: ActivatedRoute, private router: Router) { }

  onSubmit() {
    console.log(this.clientModel);
    this.submitted = true;
    this.clientService.addClient(this.clientModel).subscribe(Client => this.clientModel = Client);
    this.router.navigate(["/loanForm"]);
  }
}
