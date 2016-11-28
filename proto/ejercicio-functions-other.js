function GeoForm(type) {
    this.type = type;
    this.calculateArea = function () {
        throw `Calculate of ${this.type} to be implemented`;
    }
}

function Circle(radius) {
    this.radius = radius;
    this.calculateArea = function () {
        console.log(`${ this.type } area: ${this.radius * this.radius * Math.PI} `);
    }
}

function Square(side) {
    this.side = side;
    this.calculateArea = function () {
        console.log(`${ this.type } area: ${this.side * this.side } `);
    }
}

function Triangle(other) {
    this.other = other;
}

Square.prototype = new GeoForm('square');
Circle.prototype = new GeoForm('circle');
Triangle.prototype = new GeoForm('Triangle');

new Circle(3).calculateArea();
new Square(3).calculateArea();
new Triangle(9).calculateArea();




