class List {
    constructor() {
        this.arr = [];
        this.size = this.arr.length;

    }

    add(el) {
        this.arr.push(el);
        this.size = this.arr.length;
        this.arr.sort((a, b) => a - b)


    }
    remove(index) {
        if (0 > index || index > this.arr.length) {
            throw new Error("invalid index")
        }
        
        this.arr.splice(index, 1);
        this.size = this.arr.length;

    }
    
    get(index) {
        if (0 > index || index > this.arr.length) {
            throw new Error("invalid index")
        }

        return this.arr[index];
    }


}

let list = new List();

list.add(5);

list.add(3);

list.add(7);

console.log(list.get(1));

list.remove(0);
console.log(list.get(1)); 
