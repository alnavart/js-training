const person = {
    name: {
        first: 'Laura',
        last: 'Gonzalez'
    },
    age: 32
};

const {name: {first}, age} = person;

console.log(age, first);

function sayHi({name, age}) {
    console.log(`Hi, my name is ${ name } and I'm ${ age } old!`);
    return {eso: 'aja', aquello: [1, 2, 3]}
}

const {eso, aquello} = sayHi(person);
console.log(eso);
console.log(aquello);


console.log({ages: 99, ...person});

const b = Object.assign({ages: 33}, person);

console.log(b);
