function attachEventsListeners() {
    let inputDistance = document.getElementById('inputDistance');
    let inputOutDistance = document.getElementById('outputDistance');

    let selectInputUnits = document.getElementById('inputUnits');

    let selectOutputUnits = document.getElementById('outputUnits');

    let buttonConvert = document.getElementById('convert');

    let unitObj = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254
    }

    buttonConvert.addEventListener('click', converterClickHandler);

    function converterClickHandler() {
        // let convertFrom = selectInputUnits.value;
        // let convertTo = selectOutputUnits.value;
        
        let valueMeters = Number(inputDistance.value) * unitObj[selectInputUnits.value];
        let convert = valueMeters / unitObj[selectOutputUnits.value];
        
        inputOutDistance.value = convert;
    }


}