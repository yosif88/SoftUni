class Product {
    private static _productCount: number = 0;
    public readonly id: number;
    public _name: string;
    public _price: number;

    constructor(name: string, price: number) {
        Product._productCount++;
        this.id = Product._productCount;
        this._name = name;
        this._price = price;
    }

    get productCount(): number {
        return Product._productCount;
    }

    get name(): string {
        return this._name;
    }
    set name(val: string) {
        if (val.length < 1) {
            throw new Error('Name must contain at least 1 character');
        }
        this._name = val;
    }

    get price(): number {
        return this._price;
    }

    set price(val: number) {
        if (val <= 0) {
            throw new Error('Price must be positive');
        }

        this._price = val;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}

class Inventory {
    private products: Product[] = [];

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public listProducts(): string {
        const productDetails = this.products.
            map(product => product.getDetails())
            .join('\n');
        return `${productDetails}\nTotal products created: ${this.products.length}`
    }

}

const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.listProducts());

