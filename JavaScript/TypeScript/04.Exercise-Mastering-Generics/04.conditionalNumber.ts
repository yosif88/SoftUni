type InputParamType<T> = T extends number ? number : string;

function conditionalNumber<T>(args: InputParamType<T>): void {
    if (typeof args === 'number') {
        console.log(args.toFixed(2));

    } else {
        console.log(args);
    }
}


conditionalNumber<number>(20.3555);
conditionalNumber<string>('wow');
conditionalNumber<boolean>('a string');