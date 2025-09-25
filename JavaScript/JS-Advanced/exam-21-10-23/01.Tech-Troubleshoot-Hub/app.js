window.addEventListener('load', solution);

function solution() {
  const inputEmployee = document.getElementById('employee');
  const selectCategory = document.getElementById('category');
  const selectUrgency = document.getElementById('urgency');
  const selectTeam = document.getElementById('team');
  const inputDescription = document.getElementById('description');
  const addBtn = document.getElementById('add-btn');
  

  addBtn.addEventListener('click', onAdd);

  function onAdd(e){
    e.preventDefault();
    let employee = inputEmployee.value;
    let category = selectCategory.value;
    let urgency = selectUrgency.value;
    let team = selectTeam.value;
    let description = inputDescription.value;

    if(!employee || !category || !urgency || !team || !description){
      return;
    }

    let ul = document.querySelector('.preview-list');
    let li = document.createElement('li');
    let article = document.createElement('article');
    let pFullName = document.createElement('p');
    let pCategory = document.createElement('p');
    let pUrgency = document.createElement('p');
    let pAssignedTeam = document.createElement('p');
    let pTextDescription = document.createElement('p');


    const editBtn = document.createElement('button');
    const continueBtn = document.createElement('button');
    const resolveBtn = document.createElement('button');
    const clearBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    continueBtn.classList = 'continue-btn';
    resolveBtn.className = 'resolve-btn';
    resolveBtn.textContent = 'Resolve';
    clearBtn.className = 'clear-btn';
    clearBtn.textContent = 'Clear';

    continueBtn.textContent = 'Continue';
    li.className = 'problem-content';

    pFullName.textContent =`From: ${employee}`;
    pCategory.textContent = `Category: ${category}`;
    pUrgency.textContent = `Urgency: ${urgency}`;
    pAssignedTeam.textContent = `Assigned to: ${team}`;
    pTextDescription.textContent = `Description: ${description}`;

    article.appendChild(pFullName);
    article.appendChild(pCategory);
    article.appendChild(pUrgency);
    article.appendChild(pAssignedTeam);
    article.appendChild(pTextDescription);
    
    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);

    ul.appendChild(li);

    inputEmployee.value = '';
    selectCategory.value = '';
    selectUrgency.value = '';
    selectTeam.value = '';
    inputDescription.value = '';
    addBtn.disabled = true;

    editBtn.addEventListener('click', onEdit);

    function onEdit(e) {
      let [pName, pCategory, pUrgency, pTeam, pDescription] = document.querySelectorAll('.problem-content article p')
      inputEmployee.value = pName.textContent.replace('From: ', '');
      selectCategory.value = pCategory.textContent.replace('Category: ', '');
      selectUrgency.value = pUrgency.textContent.replace('Urgency: ', '');
      selectTeam.value = pTeam.textContent.replace('Assigned to: ', '');
      inputDescription.value = pDescription.textContent.replace('Description: ','');
      ul.innerHTML = '';
      addBtn.disabled = false;
    
    }

    continueBtn.addEventListener('click',onContinue);

    function onContinue(e){
      let ul = document.querySelector('#pending .pending-list');
      let li = document.querySelector('#preview .preview-list li');
 
      e.target.parentElement.querySelector('.edit-btn').remove(); 
      e.target.parentElement.querySelector('.continue-btn').remove(); 
     
      resolveBtn.className = 'resolve-btn';
      resolveBtn.textContent = 'Resolve';
      li.appendChild(resolveBtn);
      ul.appendChild(li);
      
    }

    resolveBtn.addEventListener('click', onResolve);

    function onResolve(e){
        let ul = document.querySelector('.resolved-list');
        let li  =e.target.parentElement;
        li.appendChild(clearBtn)
        ul.appendChild(li);
        
        e.target.parentElement.querySelector('.resolve-btn').remove(); 
    }

    clearBtn.addEventListener('click', onClear);

    function onClear(e){
      e.target.parentElement.parentElement.innerHTML='';
      addBtn.disabled = false; 
    }
  }

}


    
    
