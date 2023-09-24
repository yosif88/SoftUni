function search() {
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let searchTextElement = document.querySelector('#searchText').value;
   let result = document.getElementById('result');
   let count = 0;

     towns.forEach(town => {
         if(town.textContent.includes(searchTextElement) && searchTextElement !== ''){
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            count++;

         }else{
            town.style.fontWeight = 'normal';
            town.style.textDecoration = 'none';
         }

     })
   
   result.textContent = `${count} matches found`
   searchTextElement.value = '';
}
