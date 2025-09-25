function solve() {
    let inputTask = document.querySelector('#task');
    let inputDesc = document.querySelector('#description');
    let inputDate = document.querySelector('#date');
    const [inputSection, openSection, progressSection, finishSection] = document.querySelectorAll('section')
    const addBtn = document.getElementById('add');

    addBtn.addEventListener('click', addToDo);
    function addToDo(e) {
        e.preventDefault();
        if (!inputTask || !inputDesc || !inputDate) {
            return;
        }

        const article = document.createElement('article');
        article.innerHTML = `
            <h3>${inputTask.value}</h3>
            <p>Description: ${inputDesc.value}</p>
            <p>Due Date: ${inputDate.value}</p>
        
        `
        inputTask.value = '';
        inputDesc.value = '';
        inputDate.value = '';

        let divBtn = document.createElement('div');
        divBtn.className = 'flex';

        let startBtn = document.createElement('button');
        let deleteBnt = document.createElement('button');

        startBtn.className = 'green';
        deleteBnt.className = 'red';

        startBtn.textContent = 'Start';
        deleteBnt.textContent = 'Delete';

        divBtn.appendChild(startBtn);
        divBtn.appendChild(deleteBnt);
        article.appendChild(divBtn);

        let divEl = openSection.children[1]
        divEl.appendChild(article)

        startBtn.addEventListener('click', moveArticle);
        deleteBnt.addEventListener('click', deleteArticle);

        function deleteArticle(e) {
            article.remove();
        }

        function moveArticle(e) {
            startBtn.remove();
            const finishBtn = document.createElement('button');
            finishBtn.className = 'orange';
            finishBtn.textContent = 'Finish';
            divBtn.appendChild(finishBtn);
            progressSection.lastElementChild.appendChild(article);

            finishBtn.addEventListener('click', finishArticle);

        }

        function finishArticle(e) {
            divBtn.remove();
            finishSection.lastElementChild.appendChild(article);
        }

    }
}
