type FunctionKeys<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type AllFunctions<T> = Pick<T, FunctionKeys<T>>;

type tests = { 
   name: string,
   age: number,
   test:() => string;
}
type extracted = AllFunctions<tests>