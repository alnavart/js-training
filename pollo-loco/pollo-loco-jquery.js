var minus = ['p', 'o', 'l', 'l', 'o', 'l', 'o', 'c', 'o'];
var currentMayus = 0;
var currentMayusValue;
var mixedName;

const polloLoco = function renderPolloLoco() {

    currentMayusValue = minus[currentMayus].toUpperCase();
    mixedName = minus.slice();
    mixedName.splice(currentMayus, 1, currentMayusValue);

    console.clear();
    console.log('scream!!', mixedName.join(""));
    console.log('current mayus pos:', currentMayus);
    console.log('current mayus value:', currentMayusValue);
    console.log('current minus lengh:', minus.length);

    setTimeout(polloLoco, 500);

    if (currentMayus == (minus.length - 1)) {
        currentMayus = 0;
    }
    else {
        currentMayus++;
    }
};

polloLoco();
