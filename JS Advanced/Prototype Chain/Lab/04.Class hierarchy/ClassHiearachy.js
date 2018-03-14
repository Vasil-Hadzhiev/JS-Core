function ClassHierarchy() {
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new Error("Cannot construct Abstract instance directly");
            }
        }
        get area() {
            return undefined;
        }

        toString() {
            return this.constructor.name;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        toString() {
            return super.toString() + ` - radius: ${this.radius}`;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }
    }
    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }
        toString() {
            return super.toString() + ` - width: ${this.width}, height: ${this.height}`;
        }
        get area() {
            return this.width * this.height;
        }
    }

    return {Figure,Circle,Rectangle};
}

let obj = ClassHierarchy();
let Figure = obj.Figure;
let Circle = obj.Circle;
let Rectangle = obj.Rectangle;
//let f = new Figure();       //Error
let c = new Circle(5);
console.log(c.area);        //78.53981633974483
console.log(c.toString());  //Circle - radius: 5
let r = new Rectangle(3, 4);
console.log(r.area);        //12
console.log(r.toString());  //Rectangle - width: 3, height: 4