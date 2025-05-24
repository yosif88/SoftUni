"use strict";
function httpCode(httpCode) {
    if ('printChars' in httpCode && typeof httpCode.printChars === 'number') {
        console.log(httpCode.text.slice(0, httpCode.printChars));
    }
    else {
        console.log(httpCode.text);
    }
}
httpCode({ code: 200, text: 'OK' });
httpCode({ code: 201, text: 'Created' });
httpCode({ code: 400, text: 'Bad Request', printChars: 4 });
httpCode({ code: 404, text: 'Not Found' });
httpCode({ code: 404, text: 'Not Found', printChars: 3 });
httpCode({ code: 500, text: 'Internal Server Error', printChars: 1 });
//# sourceMappingURL=05.httpCodes.js.map