
async function solve() {

    const url = 'http://localhost:3030/jsonstore/collections/students';
    const tbodyEl = document.querySelector('tbody');

    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach(el => {

        const firstName = el.firstName;
        const lastName = el.lastName;
        const facultyNumber = el.facultyNumber;
        const grade = el.grade;

        const tr = createEl('tr');
        const tdName = createEl('td', firstName);
        const tdLastName = createEl('td', lastName);
        const tdFacultyNumber = createEl('td', facultyNumber);
        const tdGrade = createEl('td', grade);

        tr.appendChild(tdName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdFacultyNumber);
        tr.appendChild(tdGrade);
        tbodyEl.appendChild(tr);


    })

    function createEl(type, content) {
        let el = document.createElement(type, content);
        if(typeof content ==='number'){
            el.textContent = Number(content)
        }else{
            el.textContent = content;

        }
        
        return el;
    }
    document.getElementById('form').addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = new FormData(e.target);

        let firstName = data.get('firstName');
        let lastName = data.get('lastName');
        let facultyNumber = data.get('facultyNumber');
        let grade = data.get('grade');

        if ((typeof firstName !== 'string' || firstName.length === 0)
            || (typeof lastName !== 'string' || lastName.length === 0)
            || (isNaN(grade) || grade.length == 0)
            || (isNaN(facultyNumber) || facultyNumber.length == 0)) {

            return;

        }

        Array.from(document.querySelectorAll('.inputs input[type="text"]')).forEach(el => {
            el.value = ''
        })
        const option = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName,
                lastName,
                facultyNumber,
                grade: grade
            })
        }
        const tr = createEl('tr');
        const tdName = createEl('td', firstName);
        const tdLastName = createEl('td', lastName);
        const tdFacultyNumber = createEl('td', facultyNumber);
        const tdGrade = createEl('td', Number(grade));
        tr.appendChild(tdName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdFacultyNumber);
        tr.appendChild(tdGrade);
        tbodyEl.appendChild(tr);

        await fetch(url, option)

    });





}
solve()