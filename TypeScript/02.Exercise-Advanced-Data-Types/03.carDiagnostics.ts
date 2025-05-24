

type carBodyType = { material: string, state: string };
type tiresType = { airPressure: number, condition: string };
type engineType = { horsepower: number, oilDensity: number };
type diagnostics = { partName: string, runDiagnostics: () => string };



function carDiagnostics(
    carBody: carBodyType & diagnostics,
    tires: tiresType & diagnostics,
    engine: engineType & diagnostics
): void {
    console.log(carBody.runDiagnostics());
    console.log(tires.runDiagnostics());
    console.log(engine.runDiagnostics());

}

carDiagnostics(
    { material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics() { return this.partName } },
    { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics() { return this.partName } },
    { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics() { return this.partName } }

)