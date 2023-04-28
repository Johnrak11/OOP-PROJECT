import { Booking } from "../../booking/Booking";
import { Employee } from "../../person/Employee";
import { AirplineManager } from "../../person/airlineStaff/AirlineManager";

export class Airline {

    constructor(private airlineCode: string,
        private airlineName: string,
        private airlineManager: AirplineManager,
        private employees: Employee[],
        private bookings: Booking[]) { }
}