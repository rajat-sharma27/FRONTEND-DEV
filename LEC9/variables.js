// 1. String
let str1 = "Hello";
let str2 = 'World';
let str3 = `Template Literal`;

console.log(str1, str2, str3);

// 2. Number
let num1 = 25;
let num2 = 99.99;
let num3 = -100;

console.log(num1, num2, num3);

// 3. Boolean
let isActive = true;
let isVerified = false;

console.log(isActive, isVerified);

// 4. Undefined
let undef;
console.log(undef);

// 5. Null
let emptyValue = null;
console.log(emptyValue);

// 6. Symbol
let sym1 = Symbol("id1");
let sym2 = Symbol("id1"); 
console.log(sym1 === sym2); // false

// 7. BigInt
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);

// 8. Object
let person = {
    name: "Sparsh",
    age: 21,
    isStudent: true
};
console.log(person);

let fruits = ["apple", "banana", "mango"];
console.log(fruits);

// Function 
function greet() {
    console.log("Hello Everyone!");
}
greet();

// Date object
let today = new Date();
console.log(today);
