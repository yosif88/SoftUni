const assert = require('chai').assert;
const {sum }= require('./sum-of-numbers');

describe('sum', ()=>{
    it('should return correct parameters', ()=>{
     assert.equal(sum([1,2,3]), 6 , 'return sum 6')
    })
    it('should return empty array ', ()=>{
        assert.equal(sum([]), 0 , 'element should be number');
    })
    it('should return incorrect parameters', ()=>{
        assert.isNaN(sum([1,2,'s']))
    })
    
})