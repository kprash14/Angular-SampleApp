import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private baseUrl = "https://bug-free-sniffle-69gvppx9rp6vhx4gw-8080.app.github.dev/api/v2/flights";

  constructor(private http : HttpClient) { }

  getFlightDetails():Observable<Flight[]>{

    return this.http.get<Flight[]>(`${this.baseUrl}`);

  }
}
