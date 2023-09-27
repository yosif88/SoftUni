function attachGradientEvents() {
   let divElement = document.getElementById('gradient');
   let result = document.getElementById('result');

   divElement.addEventListener('mousemove', mouseMoveHandler);
   divElement.addEventListener('mouseout', mouseOutHandler);

   function mouseMoveHandler(e){
     let x = e.offsetX;
     let width = e.target.clientWidth;
     let percentage = Math.trunc((x / width) * 100);
     result.textContent = `${percentage}%`
   }
   
   function mouseOutHandler(e){
    result.textContent = '';
   }
}