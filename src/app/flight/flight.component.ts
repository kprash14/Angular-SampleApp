import { Component , OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit{

  flights : Flight[];

  constructor (private flightService : FlightService){}

  ngOnInit(): void {
    this.flightService.getFlightDetails().subscribe((Response: Flight[]) => {
      console.log("response****"+Response);
      this.flights = Response;
    });
}
}
