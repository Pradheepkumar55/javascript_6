class Circle {
    constructor(radius=1.0,colour="red"){
        this.radius = Number(radius);
        this.colour = colour;
    }
    setRadius (r){
        this.radious = Number(r);
    }
    setColour  (c){
        this.colour = c;
    
    }
    getRadius (){
        return this.radious;  
    }
    getColour(){
        return this.colour;
    
    }
    tostring (){
        return `Circle [radious=${this.radius},colour=${this.colour}]`;

    }
    getArea (){
        let area = 3.14*Math.pow(this.radious,2);
        return area.toFixed(2);
    }
    getCircumfrence(){
        let circ = 2*3.14*this.radious;
        return circ.toFixed(2);

    }
}
let circle1 = new Circle();
console.log(circle1.toString());
console.log("radius: ",circle1.getRadius());
console.log("color: ",circle1.getColour());
console.log("circumfrence: ",circle1.getCircumfrence());
console.log("Area: ",circle1.getArea());
console.log()
circle1.setRadius(2.5);
circle1.setColour("green");
console.log(circle1.toString());
console.log("radius: ",circle1.getRadius());
console.log("color: ",circle1.getColour());
console.log("circumfrence: ",circle1.getCircumfrence());
console.log("Area: ",circle1.getArea());
console.log()

let circle2 = new Circle(12.7,"black");
console.log(circle2.toString());
console.log("radius: ",circle2.getRadius());
console.log("color: ",circle2.getColour());
console.log("circumfrence: ",circle2.getCircumfrence());
console.log("Area: ",circle2.getArea());
console.log()

circle2.setRadius(25);
circle2.setColour("red");
console.log(circle1.toString());
console.log("radius: ",circle2.getRadius());
console.log("colour: ",circle2.getColour());
console.log("circumfrence: ",circle2.getCircumfrence());
console.log("Area: ",circle2.getArea());
