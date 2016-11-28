class Animal {
    constructor (type) {
        this.type = type;
    }

    introduceYourself() {
        console.log(` Hi!, I'm a ${ this.type }`)
    }
}

class Dog extends Animal {
    constructor () {
        super('dog')
    }

    static introduceYourself() {
        console.log('Guau guau!');
        super.introduceYourself();
    }
}


const dog = new Dog();

console.log(Dog);

const a = new Dog(),
      b = new Dog();

Dog.counter = 100;
Dog.prototype.counter = 30;


const c = new Dog();

console.log(a.name, 'vs', Dog.name);
console.log(Dog);
console.log(typeof a, 'vs', typeof Dog);



