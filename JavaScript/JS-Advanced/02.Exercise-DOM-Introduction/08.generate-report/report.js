function generateReport() {
    let checkBox = document.querySelectorAll('input[type=checkbox]');
    let rows = document.querySelectorAll('tbody tr');
    let textArea = document.querySelector('#output');
    let res = [];
    
    Array.from(rows).forEach(row => {
        let dataObj= {};
        Array.from(row.querySelectorAll('td')).forEach((el, i)=>{
            if(checkBox[i].checked){
                dataObj[checkBox[i].name] = el.textContent;
            }
        });
        res.push(dataObj);
    })

    textArea.value = JSON.stringify(res);

    
}