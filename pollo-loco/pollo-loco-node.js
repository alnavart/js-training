var minus = ['p', 'o', 'l', 'l', 'o', 'l', 'o', 'c', 'o'];
var currentMayus = 0;
var currentMayusValue;
var mixedName;

const polloLoco = function renderPolloLoco() {

    currentMayusValue = minus[currentMayus].toUpperCase();
    mixedName = minus.slice();
    mixedName.splice(currentMayus, 1, currentMayusValue);

    console.reset();
    console.log(mixedName.join(""));

    setTimeout(polloLoco, 500);

    if (currentMayus == (minus.length - 1)) {
        currentMayus = 0;
    }
    else {
        currentMayus++;
    }
};

console.reset = function () {
    return process.stdout.write('\x1B[2J\x1B[0f');
};

polloLoco();
