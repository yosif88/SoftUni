function sumTable() {
    let rows = document.querySelectorAll('table td:nth-child(2n)');
    let sumElements = document.querySelector('#sum');

    let sum = 0;

    Array.from(rows).forEach(row => {
        if (row.textContent !== '') {
            sum += Number(row.textContent)
        }
    })
    // for (const row of rows) {
    //     if (row.textContent !== '') {
    //         sum += Number(row.textContent);
    //     }

    // }
    sumElements.textContent = sum;
}