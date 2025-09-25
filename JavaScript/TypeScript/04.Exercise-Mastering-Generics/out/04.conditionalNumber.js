"use strict";
function conditionalNumber(args) {
    if (typeof args === 'number') {
        console.log(args.toFixed(2));
    }
    else {
        console.log(args);
    }
}
conditionalNumber(20.3555);
conditionalNumber('wow');
conditionalNumber('a string');
//# sourceMappingURL=04.conditionalNumber.js.map