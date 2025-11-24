function bike(name, price) {
    this.name = name;
    this.price = price;
    this.greet = function () {
        return `Hello, this is a bike named ${this.name} priced at ${this.price}.`;
    };
}

console.log(typeof bike); // "function"

// Testing bike object
const b = new bike("Yamaha", 90000);
console.log(b.greet()); // working greet

// Class declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(typeof Person); // "function"

// Just a normal function
function greet() {
    return "Hello from the greet function!";
}

console.log(typeof greet); // "function"
console.log(greet()); // calling greet properly

// random variable for that weird (a); //10 thing in your code
let a = 10;
console.log(a);

//IIFE
(function () {
    console.log("This is an IIFE executing immediately!");
})();


//HOF
function hofExample(fn , name) {
    return fn(name);
}

// Callback function
function callbackFunction(name) {
    return `Hello, ${name}! This is a callback function.`;
}
function anotherCallback(name) {

}
console.log(hofExample(callbackFunction,anotherCallback ,"Deepak"));



//PROtotype
 Object.prototype.sayHello = function() {
    return `Hello, I am an object named ${this.name}`;
}
let zb ={
    name:"Deepak",
    age:21
}
zb.sayHello();
console.log(zb.sayHello());



// callback fun m times

function outerFunction(callback) {
    console.log("Inside outerFunction");
    callback();
}
function innerFunction() {
    console.log("Inside innerFunction");
}   
outerFunction(innerFunction);

