function colorize() {
    let rows = document.querySelectorAll('table tr:nth-child(even)');
    
    Array.from(rows).forEach(row => {
        row.style.backgroundColor ='Teal';
    })
}