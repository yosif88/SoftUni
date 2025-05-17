function unknownResponse(response: unknown): string {

//     const res = response as { code: number; text: string; value?: any };
//     return typeof res.value === 'string' ? res.value : '-';

    if ('value' in (response as any) && typeof (response as any).value === 'string') {
        return (response as any).value 
    }
    return '-';
}

console.log(unknownResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' }));
