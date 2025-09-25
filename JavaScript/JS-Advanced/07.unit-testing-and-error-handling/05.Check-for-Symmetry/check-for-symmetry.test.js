const { isSymmetric } = require('./check-for-symmetry');
const expect = require('chai').expect;

describe('isSymmetric', () => {
    it('should return true symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.true;
    })

    it('should return false non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.to.false;
    });

    it('should return true when length is odd', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('should return false with non-array arguments', () => {
        expect(isSymmetric(123)).to.be.false;

    });
    it('should return false with non-array arguments', () => {
        expect(isSymmetric('adc')).to.be.false;

    });
    it('should return false non-symmetric array', () => {
        expect(isSymmetric([1, '1'])).to.to.false;
    });


})