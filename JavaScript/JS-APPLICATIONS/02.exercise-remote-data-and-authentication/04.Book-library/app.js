const url = 'http://localhost:3030/jsonstore/collections/books';
const tbody = document.querySelector('tbody');
const form = document.querySelector('form');
document.querySelector('#loadBooks').addEventListener('click', onLoadBooks);
const sectionEditForm = document.createElement('section');
const sectionCreateForm = document.createElement('section');
sectionCreateForm.appendChild(form)
sectionCreateForm.className = 'section-create'
sectionEditForm.className = 'section-edit'
document.querySelector('body').appendChild(sectionCreateForm)

form.addEventListener('submit', onSubmit);

tbody.innerHTML = ''
async function onLoadBooks() {

    tbody.innerHTML = ''

    try {
        const response = await fetch(url);
        const data = await response.json();
        const ids = Object.entries(data).map(el =>el[0]);


        Object.values(data).forEach(el => {

            const tr = createTagElement('tr');
            const tdTitle = createTagElement('td', el.title);
            tdTitle.className = 'td-title';
            const tdAuthor = createTagElement('td', el.author);
            tdAuthor.className = 'td-author';
            const tdButton = createTagElement('td');
            const editBtn = createTagElement('button', 'Edit');
            const deleteBtn = createTagElement('button', 'Delete');
            deleteBtn.className = 'delete-btn';
            editBtn.className = 'edit-btn';
            editBtn.setAttribute('data-set',ids[0]);
            deleteBtn.setAttribute('data-set',ids[0])
           
            ids.shift();
            tdButton.appendChild(editBtn);
            tdButton.appendChild(deleteBtn);
       
            tr.appendChild(tdTitle);
            tr.appendChild(tdAuthor);
            tr.appendChild(tdButton);
            tbody.appendChild(tr);

          
        });
      
    } catch {
        (e => {
            console.log(e.message);
        })
    }
    Array.from(document.querySelectorAll('.delete-btn')).forEach(button => {
        button.addEventListener('click', onDelete)
    })
    Array.from(document.querySelectorAll('.edit-btn')).forEach(button => {
        button.addEventListener('click', onEdit)
    })
}


async function onSubmit(e) {

    e.preventDefault();
    try{
        let [inputTitle, inputAuthor] = e.target.querySelectorAll('input[type="text"]');
        if (!inputTitle.value || !inputAuthor.value) {
            throw new Error()
        }
          
            const formData = new FormData(e.target);
            const title = formData.get('title');
            const author = formData.get('author');
            const tr = createTagElement('tr');
      
            const tdTitle = createTagElement('td', title);
            tdTitle.className = 'td-title';
            const tdAuthor = createTagElement('td', author);
            tdAuthor.className = 'td-author';
    
            const tdButton = createTagElement('td');
            const editBtn = createTagElement('button', 'Edit');
            const deleteBtn = createTagElement('button', 'Delete');
    
    
            editBtn.className = 'edit-btn';
            deleteBtn.className = 'delete-btn';
         
        
            
            tdButton.appendChild(editBtn);
            tdButton.appendChild(deleteBtn);
    
            tr.appendChild(tdTitle);
            tr.appendChild(tdAuthor);
            tr.appendChild(tdButton);
            tbody.appendChild(tr);
    
            createBook({title, author})
    
            e.target.reset()
           
    }catch(e){
        console.log(e.message);
    }
   
       
    

    Array.from(document.querySelectorAll('.delete-btn')).forEach(button => {
        button.addEventListener('click', onDelete)
    })
    Array.from(document.querySelectorAll('.edit-btn')).forEach(button => {
        button.addEventListener('click', onEdit)
    })

}

async function onEdit(e) {

    sectionEditForm.innerHTML = ''


    const title = e.target.parentElement.parentElement.querySelector('.td-title').textContent;
    const author = e.target.parentElement.parentElement.querySelector('.td-author').textContent;
    form.style.display = 'none';
    const formEl = createTagElement('form', '');
    const h3 = createTagElement('h3', 'Edit FORM');
    const labelTitle = createTagElement('label', 'TITLE');
    const inputTitle = createTagElement('input');
    const button = createTagElement('button', 'Save')
    button.setAttribute('data-id',e.target.dataset.set);

    formEl.className = 'edit-form';
    inputTitle.type = 'text';
    inputTitle.name = 'title';
    inputTitle.value = title;
    const labelAuthor = createTagElement('label', 'AUTHOR');
    const inputAuthor = createTagElement('input');
    inputAuthor.type = 'text';
    inputAuthor.name = 'author';
    inputAuthor.value = author;
    formEl.appendChild(h3)
    formEl.appendChild(labelTitle);
    formEl.appendChild(inputTitle);
    formEl.appendChild(labelAuthor);
    formEl.appendChild(inputAuthor);
    formEl.appendChild(button);
    sectionEditForm.appendChild(formEl)

    document.querySelector('body').appendChild(sectionEditForm);
    document.querySelector('.delete-btn').disabled = true;


    const editForm = document.querySelector('.edit-form')
    editForm.addEventListener('submit', editBook);
    
    
}


async function editBook(ev) {

    ev.preventDefault()
   
    const idBtn =ev.target.querySelector('button').dataset.id
    const res = Array.from(document.querySelectorAll('.edit-btn')).filter(el =>el.dataset.id === idBtn)[0]
    
    const [titleInput, authorInput] = ev.target.querySelectorAll('input[type="text"]');
    if (!titleInput.value || !authorInput.value) {
        return;
    }

    const title = titleInput.value
    const author = authorInput.value
    const btn = document.querySelector(`.edit-btn button[data-id]`)
    const tdTitle =res.parentElement.parentElement.querySelector('.td-title')
    const tdAuthor = res.parentElement.parentElement.querySelector('.td-author');
    updateBook(title, author, idBtn)
    tdTitle.textContent = title
    tdAuthor.textContent = author;
    ev.target.style.display = 'none';
    form.style.display = 'block';
    document.querySelector('.delete-btn').disabled = false;



}





async function onDelete(e) {
    let id = e.target.id;
    e.target.parentElement.parentElement.innerHTML = ''
    deleteBook(id);


}
async function updateBook(title, author, id) {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, author })
    }
     return  await fetch(`${url}/${id}`, options)
}

async function deleteBook(id) {
    const options = {
        method: 'DELETE',
       
    }
    return   await fetch(`${url}/${id}`, options)
}

async function createBook(book) {
    const title = book.title;
    const author = book.author;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            author,
            title,
        })
    }
    return  await fetch(url, options);
}

function createTagElement(type, content) {
    const el = document.createElement(type);

    el.textContent = content;


    return el
}



