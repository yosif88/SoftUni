const { expect } = require('chai');
const { lookupChar } = require('./char-lookup');

describe('lookupChar validate input', () => {
    describe('validate type string', () => {
        it('should return undefined when type is number', () => {
            expect(lookupChar(1,1)).to.undefined;
        })
        it('should return undefined when type is array', () => {
            expect(lookupChar([1,2],1)).to.undefined;
        })
        it('should return undefined when type is object', () => {
            expect(lookupChar({},1)).to.undefined;
        })
       
    })

    describe('validate type numbers on index', () => {
        it('should return undefined when type is string', () => {
            expect(lookupChar('test','1')).to.undefined;
        })
        it('should return undefined when type is string', () => {
            expect(lookupChar('test','ad')).to.undefined;
        })
        it('should return undefined when type is array', () => {
            expect(lookupChar('test',[1,2])).to.undefined;
        })
        it('should return undefined when type is object', () => {
            expect(lookupChar('test',{name: 'test'})).to.undefined;
        })
        it('should return undefined when type is floating point number', () => {
            expect(lookupChar('str',  1.3)).to.undefined;
        })
    })
    


    it('should return incorrect index:=> when index is greater than string.length', () => {
        expect(lookupChar('str',3)).to.equal('Incorrect index')
        expect(lookupChar('str',4)).to.equal('Incorrect index')
    })

    it('should return incorrect index:=> when index is less than zero', () => {
        expect(lookupChar('str',-1)).to.equal('Incorrect index')
        expect(lookupChar('str',-2)).to.equal('Incorrect index')
    })

    it('should return final result', () => {
        expect(lookupChar('str',0)).to.equal('s')
        expect(lookupChar('str',2)).to.equal('r')
    })
})