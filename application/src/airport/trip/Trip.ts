import { BookingFlight } from "./flight/BookingFlight";

export class Trip {
    constructor(private bookingFlights: BookingFlight[]) { }
}