"use strict";
class Counter {
    static count = 0;
    static increment() {
        Counter.count += 1;
    }
    static getCount() {
        return Counter.count;
    }
}
Counter.increment();
Counter.increment();
console.log(Counter.getCount());
Counter.count = 10;
//# sourceMappingURL=07.classCounter.js.map