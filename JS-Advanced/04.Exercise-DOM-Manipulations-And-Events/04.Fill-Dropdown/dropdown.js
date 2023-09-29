function addItem() {
    const selectMenu = document.getElementById('menu');
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');
    
    let options = document.createElement('option');
    
    options.textContent = inputText.value;
    options.value = inputValue.value;

    selectMenu.appendChild(options);
    
    inputText.value = '';
    inputValue.value = '';
}