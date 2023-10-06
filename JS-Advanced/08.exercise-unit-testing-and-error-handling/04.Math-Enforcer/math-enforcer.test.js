const { assert } = require('chai');
const { mathEnforcer } = require('./math-enforcer');


describe('addFive', () => {
    describe('incorrect value', () => {
        it('should return undefined with string', () => {
            assert.equal(mathEnforcer.addFive('test'), undefined)
        })
        it('should return undefined with array', () => {
            assert.equal(mathEnforcer.addFive([1, 2]), undefined)
        })
        it('should return undefined with object', () => {
            assert.equal(mathEnforcer.addFive({ 'test': 'test' }),undefined)
        })
    });

    describe('correct value', () => {
        it('should return negative value', () => {
            assert.equal(mathEnforcer.addFive(-55), -50, 'return value to be -50')
            assert.equal(mathEnforcer.addFive(-3), 2, 'return value to be 2')
        })
        it('should return positive value', () => {
            assert.equal(mathEnforcer.addFive(55), 60, 'return value to be 60')
            assert.equal(mathEnforcer.addFive(-5), 0, 'return value to be 0')
            assert.equal(mathEnforcer.addFive(15), 20, 'return value to be 20')

        })
        it('should return floating-point number', () => {
            assert.equal(mathEnforcer.addFive(1.5), 6.5, 'return value to be 6.5');
            assert.equal(mathEnforcer.addFive(0.5), 5.5, 'return value to be 5.5')
            assert.equal(mathEnforcer.addFive(0.1), 5.1, 'return value to be 5.1')
            

        })

    })
})

describe('subtractTen', () => {
    describe('incorrect value', () => {
        it('should return undefined with string', () => {
            assert.equal(mathEnforcer.subtractTen('test'), undefined)
        })
        it('should return undefined with array', () => {
            assert.equal(mathEnforcer.subtractTen([1, 2]), undefined)
        })
        it('should return undefined with object', () => {
            assert.equal(mathEnforcer.subtractTen({ 'test': 'test' }),undefined)
        })

    });
    describe('correct value', () => {
        it('should return negative number', () => {
            assert.equal(mathEnforcer.subtractTen(5), -5, 'return value to be -5')
            assert.equal(mathEnforcer.subtractTen(0), -10, 'return value to be -10')
            assert.equal(mathEnforcer.subtractTen(-10), -20, 'return value to be -20')
        })
        it('should return positive number', () => {
            assert.equal(mathEnforcer.subtractTen(20), 10, 'return value to be 10')
            assert.equal(mathEnforcer.subtractTen(35), 25, 'return value to be 25')
            assert.equal(mathEnforcer.subtractTen(10), 0, 'return value to be 0')
        })
        it('should return floating-point number', () => {
            assert.equal(mathEnforcer.subtractTen(20.14), 10.14, 'return value to be 10.14')
            assert.equal(mathEnforcer.subtractTen(0.5), -9.5, 'return value to be -9,5')

        })
    });

})
describe('sum',()=>{
    describe('incorrect value', () => {
        it('should return undefined with string ', () => {
            assert.equal(mathEnforcer.sum('test', 'test'), undefined)
        })
        it('should return undefined with array', () => {
            assert.equal(mathEnforcer.sum([1, 2],[1,2]), undefined)
        })
        it('should return undefined with object', () => {
            assert.equal(mathEnforcer.sum({ 'test': 'test' },{ 'test': 'test' }),undefined)
        })
        it('should return undefined with object', () => {
            assert.equal(mathEnforcer.sum(1,{ 'test': 'test' }),undefined)
        })
        it('should return undefined with array', () => {
            assert.equal(mathEnforcer.sum([1, 2],1), undefined)
        })

    });
    describe('correct value', () => {
        it('should return negative number', () => {
            assert.equal(mathEnforcer.sum(5,-10), -5, 'return value to be -5')
            assert.equal(mathEnforcer.sum(-2,-10), -12, 'return value to be -12')

        })
        it('should return positive number', () => {
            assert.equal(mathEnforcer.sum(20,10), 30, 'return value to be 30')
            assert.equal(mathEnforcer.sum(35,35), 70, 'return value to be 70')
            assert.equal(mathEnforcer.sum(10,5), 15, 'return value to be 15')
        })
        it('should return floating-point number', () => {
            assert.equal(mathEnforcer.sum(1.5,1.5), 3, 'return value to be 3')
            assert.equal(mathEnforcer.sum(0.5,1), 1.5, 'return value to be 1,5')
            assert.equal(mathEnforcer.sum(0.5,0.1), 0.6, 'return value to be 0,6')
            assert.equal(mathEnforcer.sum(0.5,-0.5), 0.0, 'return value to be 0')

        })
    });

})


