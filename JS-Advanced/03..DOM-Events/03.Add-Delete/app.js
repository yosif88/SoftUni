function addItem() {
   let inputElement = document.getElementById('newItemText');
   let items = document.getElementById('items');
   
   let li = document.createElement('li');
   let deleteElement = document.createElement('a');
   
   deleteElement.href='#';
   deleteElement.textContent ='[Delete]'
   li.textContent = inputElement.value;

   deleteElement.addEventListener('click', deleteItem);

   function deleteItem(e) {
       e.target.parentElement.remove();
   }
   
   if(inputElement.value !== ''){
        li.appendChild(deleteElement)
        items.appendChild(li);
        inputElement.value = '';
   }
}