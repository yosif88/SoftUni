function attachEventsListeners() {
    let inputDays = document.querySelector('#days');
    let inputHours = document.querySelector('#hours');
    let inputMinutes = document.querySelector('#minutes');
    let inputSeconds = document.querySelector('#seconds');

    const daysBtn = document.querySelector('#daysBtn');
    const hoursBtn = document.querySelector('#hoursBtn');
    const minutesBtn = document.querySelector('#minutesBtn');
    const secondsBtn = document.querySelector('#secondsBtn');

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    daysBtn.addEventListener('click', () => {
        days = Number(inputDays.value);
        hours = days * 24;
        minutes = hours * 60;
        seconds = minutes * 60;

        inputHours.value += hours;
        inputMinutes.value += minutes;
        inputSeconds.value += seconds;

    });

    hoursBtn.addEventListener('click', () => {
        hours = Number(inputHours.value);
        days = hours / 24;
        minutes = hours * 60;
        seconds = minutes * 60;

        inputDays.value += days;
        inputMinutes.value += minutes;
        inputSeconds.value += seconds;
    });

    minutesBtn.addEventListener('click', () => {
        minutes = Number(inputMinutes.value);
        hours = minutes / 60;
        days = hours / 24;
        seconds = minutes * 60;

        inputDays.value += days;
        inputHours.value += hours;
        inputSeconds.value += seconds;
    });

    secondsBtn.addEventListener('click', () => {
        seconds = Number(inputSeconds.value);
        minutes = seconds / 60;
        hours = minutes / 60;
        days = hours / 24;
       
        inputDays.value += days;
        inputHours.value += hours;
        inputMinutes.value += minutes;
    })

}