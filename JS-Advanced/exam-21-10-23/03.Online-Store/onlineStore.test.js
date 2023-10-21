const { assert } = require('chai');
const onlineStore = require('./onlineStore');

describe('onlineStore', () => {
    describe('isProductAvailable', () => {
        it('should return invalid input first params with number', () => {
            assert.throws(() => onlineStore.isProductAvailable(1, 2), 'Invalid input.');
        });
        it('should return invalid input first params with array', () => {
            assert.throws(() => onlineStore.isProductAvailable([1], 2), 'Invalid input.');
        });
        it('should return invalid input with object', () => {
            assert.throws(() => onlineStore.isProductAvailable({}, 2), 'Invalid input.');
        });

        it('should return invalid input second params with str', () => {
            assert.throws(() => onlineStore.isProductAvailable('test', 'test'), 'Invalid input.');
        });

        it('should return invalid input second params with array', () => {
            assert.throws(() => onlineStore.isProductAvailable('test', []), 'Invalid input.');
        });

        it('should return invalid input second params with object', () => {
            assert.throws(() => onlineStore.isProductAvailable('test', {}), 'Invalid input.');
        })

        it('stockQuantity less then zero', () => {
            assert.equal(onlineStore.isProductAvailable('test', 0), 'Sorry, test is currently out of stock.')
        });
       
        it('stockQuantity less then zero', () => {
            assert.equal(onlineStore.isProductAvailable('test', -1), 'Sorry, test is currently out of stock.')
        });

        it('stockQuantity greater', () => {
            assert.equal(onlineStore.isProductAvailable('test', 1),`Great! test is available for purchase.`)
        });

        it('stockQuantity greater', () => {
            assert.equal(onlineStore.isProductAvailable('test', 4),`Great! test is available for purchase.`)
        })

    });
    
    describe('canAffordProduct', ()=>{
        it('should return invalid input first params with str', () => {
            assert.throws(() => onlineStore.canAffordProduct('test', 2), 'Invalid input.');
        });

        it('should return invalid input first params with array', () => {
            assert.throws(() => onlineStore.canAffordProduct(['test'], 2), 'Invalid input.');
        });

        it('should return invalid input first params with object', () => {
            assert.throws(() => onlineStore.canAffordProduct({}, 2), 'Invalid input.');
        });

        it('should return invalid input second params with str', () => {
            assert.throws(() => onlineStore.canAffordProduct(1, 'test'), 'Invalid input.');
        });
        it('should return invalid input second params with array', () => {
            assert.throws(() => onlineStore.canAffordProduct(1, ['2']), 'Invalid input.');
        });
        it('should return invalid input second params with object', () => {
            assert.throws(() => onlineStore.canAffordProduct(1, {}), 'Invalid input.');
        });

        it('should return calculate remaining balance with remainingBalance less than zero', () => {
            assert.equal(onlineStore.canAffordProduct(400,200), 'You don\'t have sufficient funds to buy this product.');
        });

        it('should return calculate remaining balance with remainingBalance great or less than zero', () => {
            assert.equal(onlineStore.canAffordProduct(400,400), 'Product purchased. Your remaining balance is $0.');
        })

        it('should return calculate remaining balance with remainingBalance great or less than zero', () => {
            assert.equal(onlineStore.canAffordProduct(400,500), 'Product purchased. Your remaining balance is $100.');
        })
    });

    describe ('getRecommendedProducts',()=>{
        it('should return invalid input', () => {
            assert.throws(() => onlineStore.getRecommendedProducts(1, 'test'), 'Invalid input.');
        });

        it('should return invalid input', () => {
            assert.throws(() => onlineStore.getRecommendedProducts('test', 'test'), 'Invalid input.');
        });

        it('should return invalid input', () => {
            assert.throws(() => onlineStore.getRecommendedProducts({}, 'test'), 'Invalid input.');
        });

        it('should return invalid input', () => {
            assert.throws(() => onlineStore.getRecommendedProducts([1], 1), 'Invalid input.');
        });

        it('should return invalid input', () => {
            assert.throws(() => onlineStore.getRecommendedProducts([1], {}), 'Invalid input.');
        });

        it('should return recommendedProducts length is empty', () => {
            assert.equal(onlineStore.getRecommendedProducts([] ,'test'),'Sorry, we currently have no recommended products in the test category.')

        });

      
    })
})