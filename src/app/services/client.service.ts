import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ClientService {
   apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiServerUrl}/api/v1/clients`);
  }

  public addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiServerUrl}/api/v1/clients`, client);
  }
}