function hello(name, age) {
    return function (age) {
        console.log(`Hello, my name is ${name}, I'm ${age} old`)
    }
}
const alberto = hello('Alberto');

alberto(34);
alberto(12);





const helloEasy = name =>
    age =>
        console.log(`Hello, my name is ${name}, I'm ${age} old`);

const carlos = helloEasy('Carlos');

carlos(99);
carlos(87);




const animal = tipo =>
    especie =>
        console.log(`Soy un animal tipo ${tipo}, con especie ${especie}`);

const perro = animal('Perro');

perro('caniche');
perro('salchicha');

const gallina = animal('Gallina');
gallina('ponedora');
gallina('al horno');

perro('pachon');
