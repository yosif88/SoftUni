class Counter{
    private static count = 0;

    public static increment(): void{
        Counter.count += 1;
    }

    public static getCount(): number{
        return Counter.count;
    }

}

Counter.increment();
Counter.increment();
console.log(Counter.getCount());
// Counter.count = 10;