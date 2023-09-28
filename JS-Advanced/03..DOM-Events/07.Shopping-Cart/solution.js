function solve() {
   let addButton = document.querySelectorAll('.add-product');
   let textArea = document.querySelector('textArea');
   let checkout = document.querySelector('.checkout');
   
   let products=[];
   let totalSum = 0;

   Array.from(addButton).forEach(btn => {
      btn.addEventListener('click', addProduct)
   });

   checkout.addEventListener('click', checkoutHandler);


   function addProduct(e) {
     
     let div = e.target.parentNode.parentNode;
     let title = div.querySelector('.product-title');
     let money = div.querySelector('.product-line-price');
     let name = title.textContent;
     let price = Number(money.textContent);

     if (!products.includes(name)) {
         products.push(name);
     }
     totalSum += price;
     textArea.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
     
     
      
   }

   function checkoutHandler(e){
      textArea.textContent += `You bought ${products.join(', ')} for ${totalSum.toFixed(2)}.`
      Array.from(addButton).forEach(btn => btn.disabled = true);
      checkout.disabled = true;
      
   }
}