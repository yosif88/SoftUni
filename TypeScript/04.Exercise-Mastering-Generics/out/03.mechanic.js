"use strict";
;
class Mechanic {
    technicalInspection(car) { return true; }
}
let mechanic = new Mechanic();
let someCar = { engine: { horsepower: 350, type: 'diesel' }, tires: { model: 'BRIT', airPressure: 33 }, body: { material: 'aluminum' } };
let notACar = { vroom: false };
let maybeCar = { tires: { model: 'BRIT' }, body: { material: 'aluminum' } };
let maybeCar2 = { engine: { horsepower: 220 }, tires: { model: 'BRIT', wear: 'High', airPressure: 33 }, body: { material: 'aluminum' } };
let maybeCar3 = { engine: { horsepower: 250 }, tires: { model: 'Nie' } };
let maybeCar4 = { engine: { horsepower: 220, type: 'electric' }, tires: { model: 'BRIT' }, body: { material: 'steel', weight: 2670 } };
let maybeCar5 = { engine: { horsepower: '220', type: 'electric' }, tires: { model: 'BRIT', airPressure: 28 }, body: { material: 'steel', weight: 2670 } };
mechanic.technicalInspection(someCar); //ok
mechanic.technicalInspection(maybeCar2); //ok
//# sourceMappingURL=03.mechanic.js.map