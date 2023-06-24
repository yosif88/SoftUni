function storeProvision(stock, products) {
    let store = {};

    for (let i = 0; i < stock.length; i+=2) {
        let product = stock[i]
        
            store[product] =Number(stock[i + 1]) 
        
        
    }
 
    
    for (let i = 0; i < products.length; i+=2) {
        let currentProduct = products[i];
        
        
            let quantity = Number(products[i + 1])
        if (!store.hasOwnProperty(currentProduct)){
           
            store[currentProduct] = 0;
        }
        store[currentProduct] += quantity
    }

    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }
   

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ])