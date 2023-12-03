function solve() {

    const spanEl = document.querySelector('#info span');
    const url = 'http://localhost:3030/jsonstore/bus/schedule/';
    const arriveBtn = document.querySelector('#arrive');
    const departBtn = document.querySelector('#depart');

    let nextStop = 'depot';
    let currentStop = '';

    async function depart() {
        const response = await fetch(url + nextStop);
        const data = await response.json();
        spanEl.textContent = `Next stop ${data.name}`;
        
        nextStop = data.next;
        currentStop = data.name;

        arriveBtn.disabled = false;
        departBtn.disabled = true;
    }

    function arrive() {
        spanEl.textContent = `Arriving at ${currentStop}`
        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();