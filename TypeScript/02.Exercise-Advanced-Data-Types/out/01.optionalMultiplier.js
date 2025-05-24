"use strict";
function optionalMultiplier(param1, param2, param3) {
    const num1 = param1 != undefined ? Number(param1) : 1;
    const num2 = param2 != undefined ? Number(param2) : 1;
    const num3 = param3 != undefined ? Number(param3) : 1;
    return num1 * num2 * num3;
}
console.log(optionalMultiplier('3', 5, '10'));
console.log(optionalMultiplier('2', '2'));
console.log(optionalMultiplier(undefined, 2, 3));
console.log(optionalMultiplier(7, undefined, '2'));
console.log(optionalMultiplier());
//# sourceMappingURL=01.optionalMultiplier.js.map