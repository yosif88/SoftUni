"use strict";
function unknownResponse(response) {
    //     const res = response as { code: number; text: string; value?: any };
    //     return typeof res.value === 'string' ? res.value : '-';
    if ('value' in response && typeof response.value === 'string') {
        return response.value;
    }
    return '-';
}
console.log(unknownResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' }));
//# sourceMappingURL=07.unknownResponse.js.map