import { Trip } from "../airport/trip/Trip";
import { Passenger } from "../person/passenger/Passenger";
import { Baggage } from "./baggage/Baggage";
import { Mealtype } from "./mealType/MealType";

export class Booking {
    private checkedIn: boolean = false;
    constructor(
        private bookingReferenceNumber: string,
        private passenger : Passenger,
        private baggages: Baggage[],
        private mealType: Mealtype,
        private departureTrip: Trip,
        private returnTrip?: Trip,
    ) { }

    // get bookingReferenceNumber
    public getBookingReferenceNumber = (): string => this.bookingReferenceNumber;

    // is return
    public isReturn = ():boolean => this.returnTrip !== undefined;

    //get passenger
    public getPassenger = ():Passenger => this.passenger;

    //get trip
    public getDepartureTrip= ():Trip => this.departureTrip;
}