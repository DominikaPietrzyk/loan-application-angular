import { Component, OnInit } from '@angular/core';
import { Client } from './model/client';
import { ClientService } from './services/client.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: 'Loan application';

  constructor(private router: Router){}

  ngOnInit() {

  }

  goToPage(pageName : string) : void {
    this.router.navigate([`${pageName}`]);
  }








}