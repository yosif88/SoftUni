function solve() {
 let textEl = document.getElementById('input');
 let outputEl = document.getElementById('output');

 let textAsArr = textEl.value.split('.').filter(s=> s!=='');
 
 while(textAsArr.length > 0){
    let p = document.createElement('p');
    let text =  textAsArr.splice(0,3).join('.') + '.';
    p.textContent = text;
    outputEl.appendChild(p);


 }
}