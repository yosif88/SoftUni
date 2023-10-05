const {expect} = require('chai');
const { rgbToHexColor } = require('./rgb-to-hex');

describe('rgbToHexColor', () => {
    describe('check red color', ()=>{
        it('should return undefined  when number it is negative number', () => {
            expect(rgbToHexColor(-1, 100, 100)).to.be.undefined;
        })
        it('should return undefined  when number it is great than by 255', () => {
            expect(rgbToHexColor(256, 100, 100)).to.be.undefined;
        })
        it('should return undefined when is not a number ', () => {
            expect(rgbToHexColor('a', 100, 100)).to.be.undefined;
        })
        it('should return undefined  when number it is float-point', () => {
            expect(rgbToHexColor(1.4, 100, 100)).to.be.undefined;
        })
       
    
        
    }) 
    describe('check green color',()=>{
        it('should return undefined  when number it is negative number', () => {
            expect(rgbToHexColor(100,-1,100)).to.be.undefined;
        })
        it('should return undefined  when number it is great than by 255', () => {
            expect(rgbToHexColor(100, 256, 100)).to.be.undefined;
        })
        it('should return undefined  is not a integer ', () => {
            expect(rgbToHexColor(100, 'g', 100)).to.be.undefined;
        })
        it('should return undefined  when number it is float-point', () => {
            expect(rgbToHexColor(100, 1.4, 100)).to.be.undefined;
        })
       
    })

    describe('check blue color',()=>{
        it('should return undefined  when number it is negative number ', () => {
            expect(rgbToHexColor(100,100, -2)).to.be.undefined;
        })
        it('should return undefined  when number it is great than by 255', () => {
            expect(rgbToHexColor(100, 100, 257)).to.be.undefined;
        })
        it('should return undefined  is not a integer ', () => {
            expect(rgbToHexColor(100,100,'a')).to.be.undefined;
        })
        it('should return undefined  when number it is float-point', () => {
            expect(rgbToHexColor(100,100,1.4)).to.be.undefined;
        })
       
      
    })
    it('should return # and zero final result',()=>{
            expect(rgbToHexColor(255, 158, 170)).equal('#FF9EAA')
    })
    it('should return currect value', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    })
   
})