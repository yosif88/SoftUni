const {expect} = require('chai');
const { isOddOrEven } = require('./odd-or-even');

describe('isOddOrEven', ()=>{
    it('should return undefined non-string', ()=>{
        expect(isOddOrEven(1)).to.undefined;
    })
    it('should return undefined non string', ()=>{
        expect(isOddOrEven({test:'test'})).to.undefined;
    })
    it('should return undefined non string', ()=>{
        expect(isOddOrEven([1,2])).to.undefined;
    })
    it('should return even length  it string', ()=>{
        expect(isOddOrEven('ab')).to.equal('even')
    })
    it('should return even length  it string', ()=>{
        expect(isOddOrEven('1234')).to.equal('even')
    })
    it('should return odd length  it string', ()=>{
        expect(isOddOrEven('123')).to.equal('odd')
    })
    it('should return odd length  it string', ()=>{
        expect(isOddOrEven('adc')).to.equal('odd')
    })
})