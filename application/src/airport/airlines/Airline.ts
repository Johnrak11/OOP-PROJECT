import { Booking } from "../../booking/Booking";
import { Employee } from "../../person/Employee";
import { AirplineManager } from "../../person/airlineStaff/AirlineManager";
import { Passenger } from "../../person/passenger/Passenger";
import { Flight } from "../trip/flight/Flight";

export class Airline {

    constructor(private airlineCode: string,
        private airlineName: string,
        private airlineManager: AirplineManager,
        private employees: Employee[],
        private bookings: Booking[]) { }

    // get bookings
    public getBooking = (): Booking[] => this.bookings;

    // add booking
    public addBooking = (...bookings: Booking[]): void => {
        for (let booking of bookings) {
            this.bookings.push(booking)
        }
    };

    // passengers have return tickets
    public getPassengerReturnTickets = (flight: Flight) => {
        let listPassengers: Passenger[] = []
        for (let booking of this.bookings) {
            for (let bookingFlight of booking.getDepartureTrip().getBookingFlights()) {
                if (bookingFlight.getFlight() === flight) {
                    if (booking.isReturn()) {
                        listPassengers.push(booking.getPassenger());
                    }
                }
            }
        };
        return listPassengers;
    };

}