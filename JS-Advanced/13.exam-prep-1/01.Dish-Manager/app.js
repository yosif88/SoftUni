window.addEventListener("load", solve)

function solve() {
  let inputFirstName = document.querySelector('#first-name');
  let inputLastName = document.querySelector('#last-name');
  let inputAge = document.querySelector('#age');
  let select = document.querySelector('#genderSelect');
  let submitBtn = document.querySelector('#form-btn');
  let textArea = document.querySelector('#task');
  let progressCounter = document.querySelector('#progress-count');
  let buttonClear = document.querySelector('#clear-btn');
  let count = 0;

  submitBtn.addEventListener("click", inProgress);

  function inProgress(e) {


    let ulEl = document.querySelector('#in-progress');
    let li = document.createElement('li');
    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    let pAge = document.createElement('p');
    let pDescription = document.createElement('p');

    let editBtn = document.createElement('button');
    let completeBtn = document.createElement('button');

    if (inputFirstName.value === '' ||
        inputLastName.value === ''  ||
        inputAge.value === ''       || 
        textArea.value === '') {
      return;
    }

    li.className = 'each-line';
    editBtn.className = 'edit-btn';
    completeBtn.className = 'complete-btn';
    h4.textContent = `${inputFirstName.value} ${inputLastName.value}`;
    pAge.textContent = `${select.value}, ${inputAge.value}`;
    pDescription.textContent =`${textArea.parentElement.children[0].textContent}: ${textArea.value}`;
    editBtn.textContent = 'Edit';
    completeBtn.textContent = 'Mark as complete';

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pDescription);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(completeBtn);

    ulEl.appendChild(li);
    ulEl.appendChild(li);

    inputFirstName.value = '';
    inputLastName.value = '';
    inputAge.value = '';
    textArea.value = '';
   
  
    count++;
    progressCounter.textContent = count;
    
    editBtn.addEventListener('click', edit);
    
    function edit(e){
        let article =  e.target.parentElement.children[0];

        let [firstName, lastName] = article.children[0].textContent.split(' ');

        inputFirstName.value = firstName;
        inputLastName.value = lastName;
       
        let [gender, age] = article.children[1].textContent.split(' ');

        inputAge.value = age;
       let dish = article.children[2].textContent.replace('Dish description: ', '');
        textArea.value = dish;
        select.value = gender;

       e.target.parentElement.remove()
    
        count --;
        progressCounter.textContent = count;
    
        

    }

    completeBtn.addEventListener('click',complete);

    function complete(e){
      let ulParent = document.querySelector('#finished');
      let liItems = document.querySelectorAll('#in-progress li');
     
      for (let li of liItems) {
     
          let[b1, b2] = li.querySelectorAll('button');
          b1.remove();
          b2.remove()
          ulParent.appendChild(li);
    
        break
       
      }
      
     
      count --;
      progressCounter.textContent = count;    
    }

    buttonClear.addEventListener('click',clear);
    
    function clear(){
     
      let li = document.querySelectorAll('#finished li');
      Array.from(li).forEach(el => el.remove())
     
    }
  
  }

 
}



/*

Unexpected error: Dish description is invalid: expected 'Biscuits n gravy. An irresistible Southern favorite, biscuits and gravy would be a cliche if they werent so darned delicious.' 
to equal 
'Dish description: Biscuits n gravy. An irresistible Southern favorite, 
biscuits and gravy would be a cliche if they werent so darned delicious.'

*/