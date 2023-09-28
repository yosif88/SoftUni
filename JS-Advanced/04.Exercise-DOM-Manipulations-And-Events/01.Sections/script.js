function create(words) {

   const divElParent = document.getElementById('content');
   
   for (const word of words) {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      
      paragraph.textContent = word;
      paragraph.style.display = 'none';
      
      div.appendChild(paragraph);
      divElParent.appendChild(div);
   }
   
   divElParent.addEventListener('click', (e) =>{
      let current_paragraph = e.target.children[0];
      current_paragraph.style.display='block';
    })
}