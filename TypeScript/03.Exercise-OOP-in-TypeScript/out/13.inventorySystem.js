"use strict";
class Product {
    static _productCount = 0;
    id;
    _name;
    _price;
    constructor(name, price) {
        Product._productCount++;
        this.id = Product._productCount;
        this._name = name;
        this._price = price;
    }
    get productCount() {
        return Product._productCount;
    }
    get name() {
        return this._name;
    }
    set name(val) {
        if (val.length < 1) {
            throw new Error('Name must contain at least 1 character');
        }
        this._name = val;
    }
    get price() {
        return this._price;
    }
    set price(val) {
        if (val <= 0) {
            throw new Error('Price must be positive');
        }
        this._price = val;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}
class Inventory {
    products = [];
    addProduct(product) {
        this.products.push(product);
    }
    listProducts() {
        const productDetails = this.products.
            map(product => product.getDetails())
            .join('\n');
        return `${productDetails}\nTotal products created: ${this.products.length}`;
    }
}
const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);
inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(inventory.listProducts());
//# sourceMappingURL=13.inventorySystem.js.map