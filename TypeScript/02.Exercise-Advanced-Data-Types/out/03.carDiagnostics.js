"use strict";
function carDiagnostics(carBody, tires, engine) {
    console.log(carBody.runDiagnostics());
    console.log(tires.runDiagnostics());
    console.log(engine.runDiagnostics());
}
carDiagnostics({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics() { return this.partName; } }, { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics() { return this.partName; } }, { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics() { return this.partName; } });
//# sourceMappingURL=03.carDiagnostics.js.map