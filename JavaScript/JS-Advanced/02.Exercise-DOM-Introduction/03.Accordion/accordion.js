function toggle() {
   let spanElement = document.querySelector('#accordion .head span');
   let pElement = document.querySelector('#extra');

   if (spanElement.textContent ==='More'){
        pElement.style.display = 'block';
        spanElement.textContent = 'Less'
   }else{
    spanElement.textContent='More';
    pElement.style.display = 'none';
 
   }
  
  
}