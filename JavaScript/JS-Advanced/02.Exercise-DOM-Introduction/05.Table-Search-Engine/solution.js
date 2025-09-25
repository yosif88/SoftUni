function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let rows = document.querySelectorAll('.container tr');
   let searchElement = document.querySelector('#searchField');


   function onClick() {
      for (const row of rows) {
         row.className = '';
         if(row.textContent.includes(searchElement.value) && searchElement.value !==''){
            row.className = 'select';
         }
         
      }
      searchElement.value = '';
   }
   
}