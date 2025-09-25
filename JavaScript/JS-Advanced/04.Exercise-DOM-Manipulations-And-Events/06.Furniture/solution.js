function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll('button');
  let [textAreaGenerate, textAreaResult] = document.querySelectorAll('textarea');

  generateBtn.addEventListener('click', generate);

  function generate() {
    let data = JSON.parse(textAreaGenerate.value);
    let tbody = document.querySelector('tbody');

    data.forEach(el => {
      let tr = document.createElement('tr');

      let td1 = document.createElement('td');
      let img = document.createElement('img');
      img.src = el.img;
      td1.appendChild(img);
      tr.appendChild(td1);

      let td2 = document.createElement('td');
      let p1 = document.createElement('p');
      p1.textContent = el.name;
      td2.appendChild(p1);
      tr.appendChild(td2);

      let td3 = document.createElement('td');
      let p2 = document.createElement('p');
      p2.textContent = el.price;
      td3.appendChild(p2);
      tr.appendChild(td3);

      let td4 = document.createElement('td');
      let p3 = document.createElement('p');
      p3.textContent = el.decFactor;
      td4.appendChild(p3);
      tr.appendChild(td4);

      let td5 = document.createElement('td');
      let checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      td5.appendChild(checkBox);
      tr.appendChild(td5);

      tbody.appendChild(tr);
    })

  }

  buyBtn.addEventListener('click', buy);

  function buy(e){
    
    let checkBoxes = Array.from(document.querySelectorAll('input[type=checkbox]')).
    filter(el => el.checked);
    
    let totalPrice = 0;
    let bought = [];
    let decFactor = 0;

    checkBoxes.forEach(el => {
      let parent = el.parentElement.parentElement;
      const p = Array.from(parent.querySelectorAll('p'));
      bought.push(p[0].textContent);
      totalPrice += Number(p[1].textContent);
      decFactor += Number(p[2].textContent);

    })
    textAreaResult.textContent +=`Bought furniture: ${bought.join(', ')}\n`;
    textAreaResult.textContent +=`Total price: ${totalPrice.toFixed(2)}\n`
    textAreaResult.textContent +=`Average decoration factor: ${decFactor / checkBoxes.length}`
    
  }
}