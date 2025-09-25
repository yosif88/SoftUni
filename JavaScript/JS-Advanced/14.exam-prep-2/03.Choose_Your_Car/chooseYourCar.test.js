const {assert} = require('chai');
const { chooseYourCar } = require('./chooseYourCar');

describe('chooseYourCar', () => {
    describe('choosingType',()=>{
        it('should return invalid years',()=> {
            assert.throws(()=> chooseYourCar.choosingType('test', 'red',1899),"Invalid Year!")
        });
        it('should return invalid years',()=> {
            assert.throws(()=> chooseYourCar.choosingType('test', 'red',2023),"Invalid Year!")
        });

        it('should return invalid type',()=> {
            assert.throws(()=> chooseYourCar.choosingType('test','red', 2010),"This type of car is not what you are looking for.");
        });

        it('should return correct type',()=> {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red',2010),`This red Sedan meets the requirements, that you have.`)
        });

        it('should return correct type',()=> {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red',2012),`This red Sedan meets the requirements, that you have.`)
        });

        it('should return correct type',()=> {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red',2009),`This Sedan is too old for you, especially with that red color.`)
        });
    });

    describe("brandName", () =>{
        it("should throw invalid brand non-array",()=>{
        assert.throws(() => chooseYourCar.brandName('abs',1),'Invalid Information!');
        assert.throws(() => chooseYourCar.brandName({'test':'test'},1),'Invalid Information!');
        assert.throws(() => chooseYourCar.brandName(1,1),'Invalid Information!');

        });

        it("should throw invalid index",()=>{
            assert.throws(() => chooseYourCar.brandName(['a','b'],-1),'Invalid Information!');
            assert.throws(() => chooseYourCar.brandName(['test'],2),'Invalid Information!');
            assert.throws(() => chooseYourCar.brandName(1,'test'),'Invalid Information!');
    
    
            });

            it("should return brand",()=>{
                let brand = ["BMW", "Toyota", "Peugeot"];

                assert.equal(chooseYourCar.brandName(brand, 1),  'BMW, Peugeot' )
                assert.equal(chooseYourCar.brandName(brand, 0),  'Toyota, Peugeot' )
                assert.equal(chooseYourCar.brandName(brand, 2),  'BMW, Toyota' )
        
        
                });

    });

    describe('carFuelConsumption',() => {
        it('should trows Invalid Information!',() => {
            assert.throws(() => chooseYourCar.carFuelConsumption('test', 0),'Invalid Information!')
            assert.throws(() => chooseYourCar.carFuelConsumption(1, 'test'),'Invalid Information!')
            assert.throws(() => chooseYourCar.carFuelConsumption('test', 'test'),'Invalid Information!')
            assert.throws(() => chooseYourCar.carFuelConsumption(1, 0),'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption(1, -1),'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption(0, 1),'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption(-1, 1),'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption(-1, 0),'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption(-1,-1),'Invalid Information!');
        })

        it('should return calculate liters per hundred Km ',()=>{
            assert.equal(chooseYourCar.carFuelConsumption(10,10), 'The car burns too much fuel - 100.00 liters!')
            assert.equal(chooseYourCar.carFuelConsumption(100,13.2), 'The car burns too much fuel - 13.20 liters!');
            assert.equal(chooseYourCar.carFuelConsumption(25,1), 'The car is efficient enough, it burns 4.00 liters/100 km.');
            assert.equal(chooseYourCar.carFuelConsumption(10.5,25.5), 'The car burns too much fuel - 242.86 liters!');
            assert.equal(chooseYourCar.carFuelConsumption(300.5,20.5), 'The car is efficient enough, it burns 6.82 liters/100 km.');
            assert.equal(chooseYourCar.carFuelConsumption(200,21), 'The car burns too much fuel - 10.50 liters!');
            assert.equal(chooseYourCar.carFuelConsumption(100,7), 'The car is efficient enough, it burns 7.00 liters/100 km.');

        })
    })
})