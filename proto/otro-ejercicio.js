const rectangulo = {};
rectangulo.a = 10;
rectangulo.b = 3;

Object.defineProperty(rectangulo, 'area', {
    get: () => rectangulo.a * rectangulo.b
});

console.log(rectangulo.area);

Object.defineProperty(rectangulo, 'setTimeout', {
    set: (x) => {
        clearTimeout(rectangulo.timeout);
        if(!isNaN(x) && x > 0){
            rectangulo.timeout = setTimeout(rectangleAlert, x, x);
        }
    }
});

function rectangleAlert(x) {
    console.log(`Timeout alert ${x}!`);
}

rectangulo.setTimeout = 40;
rectangulo.setTimeout = 9;
rectangulo.setTimeout = 0;
