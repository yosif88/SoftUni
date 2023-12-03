function attachEvents() {
    const textArea = document.querySelector('#messages');
    const inputsRef = document.querySelectorAll('#controls input[type="text"]');


    document.querySelector('#refresh').addEventListener('click', loadAllMessage);
    document.querySelector('#submit').addEventListener('click', postMessage)

    const url = 'http://localhost:3030/jsonstore/messenger';


    async function loadAllMessage(e) {
        textArea.value = ''
        const response = await fetch(url);
        const data = await response.json();
        textArea.value = Object.values(data).map(({ author, content }) => `${author}: ${content}`).join('\n');

    }

    async function postMessage(e) {
        const author = inputsRef[0].value;
        const content = inputsRef[1].value;

        if (author === '' || content === '') {
            inputsRef[0].value = ''
            inputsRef[1].value = ''
            return;
        }

        const data = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author,
                content
            })
        }
        await fetch(url, data)
        inputsRef[0].value = ''
        inputsRef[1].value = ''
    }
}


attachEvents();