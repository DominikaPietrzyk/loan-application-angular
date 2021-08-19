import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../model/client';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  client: Client = new Client(5,"","");

  ngOnInit(): void {
  }

  onClik(id : number){
    this.router.navigate([`/clientForm`,id])
  }
}
