function cat(input) {
    let arr = [];
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;

           
        }
        meow(){
            return`${this.name}, age ${this.age} says Meow`;
        }
    }

    for (let i = 0; i < input.length; i++) {
        let [name, age] = input[i].split(' ');
        arr.push(new Cat(name, age))
    }

    for (const cat of arr) {
        console.log(cat.meow());
    }
    
}

cat(['Mellow 2', 'Tom 5'])