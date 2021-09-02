import { HttpClient, HttpResponse } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { Client } from "../model/client";
import { ClientService } from "./client.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ClientService.addClient()', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let clientService: ClientService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ClientService
            ]
        });

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        clientService = TestBed.inject(ClientService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should add an client and return it', () => {
        const client: Client = { id: 1, firstName: "Jan", lastName: "Nowak" };

        clientService.addClient(client).subscribe(
            data => expect(data).toEqual(client, 'should return the clients'),
            fail
        );

        const req = httpTestingController.expectOne("http://localhost:8080/api/v1/clients");
        expect(req.request.method).toEqual('POST');
        expect(req.request.body).toEqual(client);

        const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: client });
        req.event(expectedResponse);
    });
})

describe('ClientService.getClients()', () => {
    let clients: Client[];
    let httpTestingController: HttpTestingController;
    let clientService: ClientService;
    let httpClient: HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ClientService
            ]
        });

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        clientService = TestBed.inject(ClientService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    beforeEach(() => {

        clients = [
            { id: 1, firstName: 'Jan', lastName: 'Kowalski' },
            { id: 2, firstName: 'Karaol', lastName: 'Nowak' }
        ] as Client[];
    });

    it('should return expected clients by calling once', () => {
        clientService.getClients().subscribe(
            data => expect(data).toEqual(clients, 'should return expected clients'),
            fail
        );

        const req = httpTestingController.expectOne("http://localhost:8080/api/v1/clients");
        expect(req.request.method).toEqual('GET');

        req.flush(clients);
    });
});

