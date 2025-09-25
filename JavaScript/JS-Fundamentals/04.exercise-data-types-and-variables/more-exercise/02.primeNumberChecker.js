function primeNumberChecker(number) {
    let divider = 2
    let isPrime = true;
    for (let i = divider; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
       
    }
    console.log(isPrime);
}
primeNumberChecker(7)