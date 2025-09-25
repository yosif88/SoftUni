function addItem() {
    let items = document.querySelector('#items');
    let inputElement = document.querySelector('#newItemText');
    let liElement = document.createElement('li');

    if (inputElement.value !== '') {
        liElement.textContent = inputElement.value;
        items.appendChild(liElement);
        inputElement.value = '';

    }
    
}