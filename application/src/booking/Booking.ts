import { Trip } from "../airport/trip/Trip";
import { Baggage } from "./baggage/Baggage";
import { Mealtype } from "./mealType/MealType";

export class Booking {
    constructor(
        private checkedIn: boolean = false,
        private bookingReferenceNumber: string,
        private baggages: Baggage[],
        private mealType: Mealtype,
        private departureTrip: Trip,
        private returnTrip?: Trip,
    ) { }
}