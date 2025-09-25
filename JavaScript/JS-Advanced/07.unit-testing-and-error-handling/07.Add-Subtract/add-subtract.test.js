const { createCalculator } = require('./add-subtract');

const expect = require('chai').expect;

describe('createCalculator', () => {
    beforeEach(() => {
        calc = createCalculator()
    });

    it('return zero initial value', () => {
        expect(calc.get()).to.equal(0);
    });

    it('should can add numbers', () => {
        calc.add(1);
        ; expect(calc.get()).to.equal(1);
    });

    it('can move than one numbers', () => {
        calc.add(1);
        calc.add(1);
        expect(calc.get()).to.equal(2);
    })

    it('can subtract number', () => {
        calc.subtract(1);
        expect(calc.get()).to.equal(-1);
    });

    it('can subtract parse number', () => {
        calc.subtract('1');
        expect(calc.get()).to.equal(-1);
    });
    it (' add one parse numbers', ()=>{
        calc.add(1);
        calc.add('1');
        expect(calc.get()).to.equal(2);
   })


})