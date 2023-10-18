window.addEventListener("load", solve);

function solve() {
  const inputName = document.getElementById('first-name');
  const inputLastName = document.getElementById('last-name');
  const inputAge = document.getElementById('age');
  const inputStoryTitle = document.getElementById('story-title');
  const selectGenre = document.getElementById('genre');
  const textArea = document.getElementById('story');
  const publishBtn = document.getElementById('form-btn');

  const li = document.createElement('li');
  const article = document.createElement('article');
  const h4 = document.createElement('h4');
  const pAge = document.createElement('p');
  const pTitle = document.createElement('p');
  const pGenre = document.createElement('p');
  const pText = document.createElement('p');


  publishBtn.addEventListener('click', onPublish);

  function onPublish(e) {
    let firstName = inputName.value;
    let lastName = inputLastName.value;
    let age = inputAge.value;
    let storyTitle = inputStoryTitle.value;
    let text = textArea.value;

    const saveBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    saveBtn.className = 'save-btn';
    editBtn.className = 'edit-btn';
    deleteBtn.className = 'delete-btn';

    saveBtn.textContent = 'Save Story';
    editBtn.textContent = 'Edit Story';
    deleteBtn.textContent = 'Delete Story';

    let ul = document.getElementById('preview-list');

    if (!firstName || !lastName || !age || !storyTitle || !text) {
      return;
    }

    li.className = 'story-info';
    h4.textContent = `Name: ${firstName} ${lastName}`;
    pAge.textContent = `Age: ${age}`;
    pTitle.textContent = `Title: ${storyTitle}`;
    pGenre.textContent = `Genre: ${selectGenre.value}`;
    pText.textContent = text;

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pText);

    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    ul.appendChild(li);
    e.target.disabled = true;

    inputName.value = '';
    inputLastName.value = '';
    inputAge.value = '';
    inputStoryTitle.value = '';
    textArea.value = '';

    editBtn.addEventListener('click', onEdit);

    function onEdit(e){
     let [name, lastName] = e.target.parentElement.querySelector('h4').textContent.replace('Name: ','').split(' ');
     let [text, age] = e.target.parentElement.querySelector('article > p').textContent.split(' ');
     let title = e.target.parentElement.querySelector('article p:nth-child(odd)').textContent.replace('Title: ', '');
     let description =  e.target.parentElement.querySelector('article p:last-child').textContent;
      
     inputName.value = name;
     inputLastName.value = lastName;
     inputAge.value = age;
     inputStoryTitle.value = title;
     textArea.value = description;
     e.target.parentElement.parentElement.removeChild(li);
     publishBtn.disabled = false;
     

    }

    saveBtn.addEventListener('click', onSave);
    
    function onSave(e) {
      let div = document.getElementById('main');
      const h1 = document.createElement('h1');
      h1.textContent = "Your scary story is saved!";
      div.innerHTML = '';

      div.appendChild(h1);
    }

    deleteBtn.addEventListener('click', onDelete);

    function onDelete(e){
      e.target.parentElement.remove();
      publishBtn.disabled = false; 
      
    }


  }

}
