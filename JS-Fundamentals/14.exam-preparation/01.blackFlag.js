function blackFlag(input) {
    let days = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let expectedPlunder = Number(input[2]);
    let totalPlunder = 0;

    for (let day = 1; day <= days; day++) {
        totalPlunder += dailyPlunder;

        if (day % 3 == 0) {
            totalPlunder += dailyPlunder * 0.50;

        }
        if (day % 5 == 0) {
            totalPlunder *= 0.70;

        }

    }
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);

    } else {
        let percentageLeft = (totalPlunder / expectedPlunder) * 100;
        console.log(`Collected only ${percentageLeft.toFixed(2)}% of the plunder.`);
    }


}

blackFlag([
    "10",
    "20",
    "380"])