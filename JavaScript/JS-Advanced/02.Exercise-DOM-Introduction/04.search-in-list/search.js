function search() {
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let searchTextElement = document.querySelector('#searchText');
   let result = document.getElementById('result');
   let count = 0;

     towns.forEach(town => {
         if(town.textContent.includes(searchTextElement.value) && searchTextElement.value !== ''){
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            count++;

         }else{
            town.style.fontWeight = 'normal';
            town.style.textDecoration = 'none';
         }

     })
   
     searchTextElement.value = '';
   result.textContent = `${count} matches found`
  
  
}
