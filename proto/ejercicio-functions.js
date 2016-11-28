function Shape(type) {
    this.type = type;
}

Shape.prototype.calculateArea = function () {
    throw `Calculate of ${this.type} to be implemented`;
};

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = new Shape('circle');
Circle.prototype.calculateArea = function () {
    console.log(`${ this.type } area: ${this.radius * this.radius * Math.PI} `);
};

function Square(side) {
    this.side = side;
}

Square.prototype = new Shape('square');
Square.prototype.calculateArea = function () {
    console.log(`${ this.type } area: ${this.side * this.side } `);
};

function Triangle(other) {
    this.other = other;
}

Triangle.prototype = new Shape('Triangle');

const circle = new Circle(3);
const square = new Square(3);
const triangle = new Triangle(9);

circle.calculateArea();
square.calculateArea();
triangle.calculateArea();




