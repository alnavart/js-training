const sampleModule = (function () {
    let counter = 0;

    return {
        next: () => counter++,
        prev: () => counter--,
        current: () => counter
    };
})();

sampleModule.next();
console.log(sampleModule.current());
