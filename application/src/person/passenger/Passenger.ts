import { Booking } from "../../booking/Booking";
import { Person } from "../Person"

export class Passenger extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private frequentFlyerMembershipNumber: string,
        private bookingItems: Booking[],
    ) {
        super(firstName, lastName);
    }

    public addBooking = (booking : Booking):void => {this.bookingItems.push(booking)};
}