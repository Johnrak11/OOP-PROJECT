export class DateTime {

    constructor(private day: number,
        private month: string,
        private year: number,
        private time: string) { }

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
