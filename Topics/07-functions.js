// Functions

// Arrow Syntax
var b = (arg) => {  // a function expression in es6
    return args
}

// This keyword
function Animal(){
    this.age = 5;

    setInterval(() => {
        this.age++; // this refers to Cat Object
        console.log(`${this.age}`);
    }, 1000);
}

var cat = new Animal();


// Class Keyword
class myClass{
    constructor(height, width){
        this.height = height;
        this.width  = width;
    }

    getArea(){
        return this.height + this.width;
    }
    
}


var sample = new myClass(10,20);
console.log(sample.getArea());