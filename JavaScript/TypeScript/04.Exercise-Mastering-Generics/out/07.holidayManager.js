"use strict";
var TravelVacation;
(function (TravelVacation) {
    TravelVacation["Abroad"] = "Abroad";
    TravelVacation["InCountry"] = "InCountry";
})(TravelVacation || (TravelVacation = {}));
var MountainVacation;
(function (MountainVacation) {
    MountainVacation["Ski"] = "Ski";
    MountainVacation["Hiking"] = "Hiking";
})(MountainVacation || (MountainVacation = {}));
var BeachVacation;
(function (BeachVacation) {
    BeachVacation["Pool"] = "Pool";
    BeachVacation["Sea"] = "Sea";
    BeachVacation["ScubaDiving"] = "ScubaDiving";
})(BeachVacation || (BeachVacation = {}));
class PlannedHoliday {
    _start;
    _end;
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    set start(val) {
        if (val > this._end) {
            throw new Error('Start date cannot be after end date!');
        }
        this._start = val;
    }
    set end(val) {
        if (val < this._start) {
            throw new Error('End date cannot be before start date!');
        }
        this._end = val;
    }
    getInfo() {
        return `Holiday: ${this._start.getDate()}/${this._start.getMonth() + 1}/${this._start.getFullYear()} - ${this._end.getDate()}/${this._end.getMonth() + 1}/${this._end.getFullYear()}`;
    }
}
class HolidayManager {
    holidays = new Map();
    reserveVacation(holiday, vacationType) {
        this.holidays.set(holiday, vacationType);
    }
    listReservations() {
        let result = [];
        Array.from(this.holidays.entries()).forEach(entry => {
            result.push(`${entry[0].getInfo()} => ${entry[1]}`);
        });
        return result.join('\n');
    }
}
let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2025, 3, 17));
let holidayManager = new HolidayManager();
holidayManager.reserveVacation(holiday, TravelVacation.Abroad);
holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);
console.log(holidayManager.listReservations());
//# sourceMappingURL=07.holidayManager.js.map