function notify(message) {
 
  let divEl = document.getElementById('notification')
  divEl.textContent= message;
  divEl.style.display='block';

  divEl.addEventListener('click', onClick);

  function onClick(event) {
    event.taget.style.display= 'none';
  }

}