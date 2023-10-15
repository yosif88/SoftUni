const { assert } = require('chai');
const { PaymentPackage } = require('./payment-package');

describe('create instance', () => {
    let paymentPackage;

    beforeEach(() => {
        paymentPackage = new PaymentPackage('Test', 10)
    });

    it('should name be correct', () => {
        assert.equal(paymentPackage._name, 'Test', 'name has correct set to Test');
    });

    it('should value be correct', () => {
        assert.equal(paymentPackage._value, 10);
    });

    it('should VAT be correct', () => {
        assert.equal(paymentPackage._VAT, 20);
    });

    it('should active be correct', () => {
        assert.equal(paymentPackage._active, true);
    });
})

describe('test Accessor', () => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage('Test', 10);
    })
    it('should correct get and set name', () => {
        assert.equal(paymentPackage.name, 'Test');
        paymentPackage.name = 'Test2';
        assert.equal(paymentPackage.name, 'Test2');
    })

    it('should correct get and set value', () => {
        assert.equal(paymentPackage.value, 10);
        paymentPackage.value = 20;
        assert.equal(paymentPackage.value, 20);
        paymentPackage.value = 0;
        assert.equal(paymentPackage.value, 0);

    });

    it('should correct get and set VAT', () => {
        assert.equal(paymentPackage.VAT, 20);
        paymentPackage.VAT = 30;
        assert.equal(paymentPackage.VAT, 30);
        paymentPackage.VAT = 0;
        assert.equal(paymentPackage.VAT, 0);

    });

    it('should correct get and set active', () => {
        assert.equal(paymentPackage.active, true);
        paymentPackage.active = false;
        assert.notOk(paymentPackage.active)
    });
});

describe('test set incorrect parameters', () => {
    let paymentPackage;
    before(() => {
        paymentPackage = new PaymentPackage('Test', 10);
    });

    it('should incorrect name', () => {
        assert.throws(() => new paymentPackage('', 10))
        assert.throws(() => new paymentPackage(10, 10))
    });

    it('should incorrect value', () => {
        assert.throws(() => new paymentPackage('', 'Test'))
        assert.throws(() => new paymentPackage('', ''))
        assert.throws(() => new paymentPackage('', -10))

    });

    it('should incorrect VAT', () => {
        assert.throws(() => paymentPackage.VAT = 'Test');
        assert.throws(() => paymentPackage.VAT = '');
        assert.throws(() => paymentPackage.VAT = -10);
    });

    it('should incorrect active', () => {
        assert.throws(() => paymentPackage.active = 'test');
        assert.throws(() => paymentPackage.active = 10);

    });
});

describe('toString',()=>{
    let paymentPackage;
    
    before(() => {
        paymentPackage = new PaymentPackage('Test', 10);
    });
    
    it('should return whit active state', () => {
        let res = ["Package: Test",
        "- Value (excl. VAT): 10",
        "- Value (VAT 20%): 12"].join("\n");
        assert.equal(paymentPackage.toString(),res);
    })

    it("should active property with inactive state",()=>{
        paymentPackage.active = false;
        let res = ["Package: Test (inactive)",
        "- Value (excl. VAT): 10",
        "- Value (VAT 20%): 12"].join("\n");
        assert.equal(paymentPackage.toString(),res);
    })
});

