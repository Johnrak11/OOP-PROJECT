export class DateTime {

    constructor(private day: number,
        private month: string,
        private year: number,
        private time: string) { }

<<<<<<< HEAD
    isEqual(other: DateTime): boolean {
        if (
            this.day === other.day &&
            this.month === other.month &&
            this.year === other.year &&
            this.time === other.time
        ){
            return true
        }
        return false;
    }
}
=======
    // is equal
    public isEqual = (date: DateTime) => this.day === date.day && this.month === date.month && this.year === date.year;
}
>>>>>>> 173764a0ad2073aa6f8c3d48b89a01d207010b24
