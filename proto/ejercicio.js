class GeoForm {
    constructor(type) {
        this.type = type;
    }

    calculateArea() {
        throw `Calculate of ${this.type} to be implemented`;
    }
}

class Circle extends GeoForm {

    constructor(radius) {
        super('circle');
        this.radius = radius;
    }

    calculateArea() {
        console.log(`${ this.type } area: ${this.radius * this.radius * Math.PI} `);
    }
}

class Square extends GeoForm {
    constructor(side) {
        super('square');
        this.side = side;
    }

    calculateArea() {
        console.log(`${ this.type } area: ${this.side * this.side } `);
    }
}

new Circle(3).calculateArea();
new Square(3).calculateArea();
new GeoForm().calculateArea();



