"use strict";
function isNonEmptyStringArray(arg) {
    return Array.isArray(arg) && arg.length >= 1 && arg.every(el => typeof el === 'string');
}
let arr = ['a', 'b', 'c'];
if (isNonEmptyStringArray(arr)) {
    console.log(arr.length); // allowed
}
//# sourceMappingURL=08.customTypeGuard.js.map