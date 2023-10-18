const { assert } = require('chai');
const { movieTheater } = require('./03. Movie Theater');

describe('Movie Teacher', () => {
    describe('ageRestriction', () => {
        it("should return appropriate message for G movie rating", () => {
            assert.equal(movieTheater.ageRestrictions('G'), 'All ages admitted to watch the movie')
        });

        it("should return appropriate message for R movie rating", () => {
            assert.equal(movieTheater.ageRestrictions('R'), 'Restricted! Under 17 requires accompanying parent or adult guardian')
        });

        it("should return appropriate message for PG movie rating", () => {
            assert.equal(movieTheater.ageRestrictions('PG'), "Parental guidance suggested! Some material may not be suitable for pre-teenagers")
        });


        it("should return appropriate message for NC-17 movie rating", () => {
            assert.equal(movieTheater.ageRestrictions('NC-17'), "No one under 17 admitted to watch the movie")
        });
        it("should return random string message", () => {
            assert.equal(movieTheater.ageRestrictions('sdsd'), "There are no age restrictions for this movie")
        });
    });

    describe('moneySpent', () => {
        it("should return invalid input non-number", () => {
            assert.throws(() => movieTheater.moneySpent('test', ['food'], ['beer']), 'Invalid input')
        });

        it('should return invalid input non-array', () => {
            assert.throws(() => movieTheater.moneySpent(19, 'test',['beer']), 'Invalid input')
        })
        it('should return invalid input non-array with drinks', () => {
            assert.throws(() => movieTheater.moneySpent(19, ['test'], 123), 'Invalid input')

        });
        it('should return calculate cost with discount and return message', () => {

            assert.equal(movieTheater.moneySpent(15, ['Nachos', 'Popcorn'], ['Soda', 'Water']), 'The total cost for the purchase with applied discount is 191.60')
        });

        it('should return calculate cost without discount and return message', () => {

            assert.equal(movieTheater.moneySpent(1, ['Nachos'], ['Soda', 'Water']), 'The total cost for the purchase is 25.00')
        })

    });

    describe('reservation', () => {
        it("should return the row number with enough seats for reservation", () => {
            assert.equal(
                movieTheater.reservation(
                    [
                        { rowNumber: 1, freeSeats: 7 },
                        { rowNumber: 2, freeSeats: 5 },
                        { rowNumber: 2, freeSeats: 5 },
                        { rowNumber: 2, freeSeats: 5 },
                        { rowNumber: 2, freeSeats: 5 },
                    ],
                    6
                ),1
            )
        });
        it("should return the row number with enough seats for reservation", () => {
            assert.equal(
                movieTheater.reservation(
                    [
                        { rowNumber: 1, freeSeats: 7 },
                        { rowNumber: 2, freeSeats: 5 },
                        { rowNumber: 2, freeSeats: 5 },
                        { rowNumber: 2, freeSeats: 5 },
                        { rowNumber: 2, freeSeats: 5 },
                    ],
                    2
                ),2
            )
        });

        it("should throw an error if the input is invalid", () => {
            assert.throw(() => movieTheater.reservation("test", 6),"Invalid input")
                
        });
    });
    it("should throw an error if the input is invalid", () => {
        assert.throw(() => movieTheater.reservation([], "test"), "Invalid input")
    });
});
