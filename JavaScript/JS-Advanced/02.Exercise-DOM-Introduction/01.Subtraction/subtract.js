function subtract() {
    let firstNumber = Number(document.querySelector('#firstNumber').value);
    let secondNumber = Number(document.querySelector('#secondNumber').value);
    let sum = firstNumber - secondNumber;
    let res = document.querySelector('#result');
    res.textContent = sum;

}