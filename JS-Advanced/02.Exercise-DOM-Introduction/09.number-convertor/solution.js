function solve() {

    let selectElement = document.getElementById('selectMenuTo');
    let result = document.getElementById('result');
    let button = document.querySelector('button');
    let options = document.createElement('option');


    Array.from(selectElement.children).forEach(element => {
        element.value = 'binary';
        element.textContent = 'Binary';

    })
    options.value = 'hexadecimal';
    options.textContent = 'Hexadecimal';
    selectElement.appendChild(options);

    button.addEventListener('click', convertion)

    function convertion() {
        let input = document.getElementById('input').value;

        if (selectElement.value === 'binary') {
            result.value = Number(input).toString(2);

        } else if (selectElement.value == 'hexadecimal') {
            result.value = Number(input).toString(16).toUpperCase();
        }


    }




}