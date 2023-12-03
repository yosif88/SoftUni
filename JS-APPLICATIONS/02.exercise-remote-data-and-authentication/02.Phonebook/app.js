function attachEvents() {
   
    const inputPerson = document.getElementById('person');
    const inputPhone = document.getElementById('phone');
    const ul = document.getElementById('phonebook');

    const url = 'http://localhost:3030/jsonstore/phonebook';

    document.getElementById('btnLoad').addEventListener('click', loadMessage);

    async function loadMessage(e) {
        const response = await fetch(url);
        const data = await response.json();

        ul.innerHTML = ''

        Object.values(data).forEach(el => {
            const liEl = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = 'Delete'
            liEl.textContent = `${el.person}: ${el.phone}`;
            button.id = el._id;
            liEl.appendChild(button);
            ul.appendChild(liEl)

        })
        Array.from(document.querySelectorAll('ul li button')).forEach(button => {
            button.addEventListener('click', Delete);

        })
       async function Delete(e) {
            const id = e.target.id

            const options = {
                method: 'DELETE',
            }

            const res = await fetch(`http://localhost:3030/jsonstore/phonebook/${id}`, options);
            const data = await res.json();
           
            e.target.parentElement.remove()
        };

    }

    document.getElementById('btnCreate').addEventListener('click', createContact);

    async function createContact(e){
       
        const person = inputPerson.value;
        const phone = inputPhone.value;

        if (inputPerson.value ==='' || inputPhone.value === ''){
            inputPerson.value =''
            inputPhone.value = ''
            return;
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                person,
                phone
            })
        }
        inputPerson.value =''
        inputPhone.value = ''
        await fetch(url, options)
    }
}

attachEvents();