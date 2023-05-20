function spiceMustFlow(yield){
    let totalAmount = 0;
    let days = 0;
    let consumes = 26;

    while (yield >= 100) {
        days++;
        totalAmount += yield - consumes;
        yield -= 10;
    }

    if (totalAmount >= consumes) {
        totalAmount -= consumes;
    }
    console.log(days);
    console.log(totalAmount);
}

spiceMustFlow(111)