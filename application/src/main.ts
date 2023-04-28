import { Airport } from "./airport/Airport";
import { Airline } from "./airport/airlines/Airline";
import { DateTime } from "./airport/dateTime/DateTime";
import { Gate } from "./airport/gate/Gate";
import { Trip } from "./airport/trip/Trip";
import { Airplane } from "./airport/trip/airplane/airplane";
import { BookingFlight } from "./airport/trip/flight/BookingFlight";
import { Flight } from "./airport/trip/flight/Flight";
import { Route } from "./airport/trip/route/Route";
import { FareClass } from "./airport/trip/seatLayout/FareClass";
import { SeatLayout } from "./airport/trip/seatLayout/SeatLayout";
import { Booking } from "./booking/Booking";
import { Baggage } from "./booking/baggage/Baggage";
import { BaggageTage } from "./booking/baggage/baggageTag/BaggageTag";
import { Mealtype } from "./booking/mealType/MealType";
import { Employee } from "./person/Employee";
import { AirplineManager } from "./person/airlineStaff/AirlineManager";
import { AirlinePilot } from "./person/airlineStaff/AirlinePilot";
import { AirportController } from "./person/airportStaff/AirportController";
import { Passenger } from "./person/passenger/Passenger";

/* create booking */
let route1 = new Route(new DateTime(),new(DateTime),airport1,airport1);
let airlinePilot1 = new AirlinePilot("APilot","FAP","01AP",2000);
let seatLayoutAP1 = new SeatLayout("seatA64", FareClass.EconomyClassic);
let airplane1 = new Airplane("AP001",[seatLayoutAP1]);
let Flight1 = new Flight(1,airlinePilot1,airLine1,route1,gate1,airplane1)
let bookingFlight  = new BookingFlight(Flight1,seatLayoutAP1);
/* booking */let booking1 = new Booking(true,"A1book",[BaggageAA1], Mealtype.DairyFree,new Trip(new BookingFlight[]),new Trip(new BookingFlight[]));



/* create human */
let passengerAA = new Passenger("Dara","Py","2AB",Booking[]);
let airportController1 = new AirportController("Air1","AIR1","01",1200);
let gate1 = new Gate("gate01");
let airlinemanager1 = new AirplineManager("ALM1","FAM","01A",1400);
let Employees = new Employee("aa","AA","AA1",1000);
let airLine1 = new Airline("airline1","PPAirline",airlinemanager1, [Employees],new Booking[]);
let airport1 = new Airport("PPI","PPI1", [gate1] , airportController1,[airLine1]);
/* Baggage */let BaggageAA1 = new Baggage("BAA1",32, new BaggageTage("1A",airport1));




