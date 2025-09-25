function pointsValidation(arr) {
    x1 = arr[0];
    y1 = arr[1];
    x2 = arr[2];
    y2 = arr[3];
    let firstPoin = checkFirstPoint();
    let secondPoint = checkSecondPoint();
    let thirdPoint = thirPoin();

    if (firstPoin === Math.trunc(firstPoin)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (secondPoint === Math.trunc(secondPoint)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (thirdPoint === Math.trunc(thirdPoint)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    function checkFirstPoint() {
        return Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    }

    function checkSecondPoint() {
        return Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    }

    function thirPoin() {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }

}
pointsValidation([3, 0, 0, 4])
console.log('-----------');

pointsValidation([2, 1, 1, 1])