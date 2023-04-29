import { AirlinePilot } from "../../../person/airlineStaff/AirlinePilot";
import { Airline } from "../../airlines/Airline";
import { Gate } from "../../gate/Gate";
import { Airplane } from "../airplane/airplane";
import { Route } from "../route/Route";

export class Flight {
    constructor(private legNumber: number,
        private airLinePilot: AirlinePilot,
        private airline: Airline,
        private route: Route,
        private gate: Gate,
        private airplane: Airplane) { }
    public getAirline(){
        return this.airline
    }
    public getlegNumber(){
        return this.legNumber
    }
    public getGate =()=>{
        return this.gate;
    }
}