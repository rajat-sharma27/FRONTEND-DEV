// Global variable
//Question: Define one function and access a global variable inside and outside the function.
let globalVar = "I'm global!";

function showGlobal() {
  console.log("Inside function:", globalVar);
}

showGlobal();
console.log("Outside function:", globalVar);






//Function Scope
//Question: Define one function and access that variable inside and outside of the function.

function functionScopeExample() {
  let message = "Inside function scope";
  console.log(message); // Works fine
}

functionScopeExample();
console.log(message); // ❌ Error: message is not defined





//3. Block Scope
//Question: Define one function and access that variable inside and outside of a block.

function blockScopeExample() {
  if (true) {
    let blockVar = "Inside block scope";
    console.log(blockVar); // Works fine
  }
  console.log(blockVar); // ❌ Error: blockVar is not defined
}

blockScopeExample();






//4. Lexical Scope
//Question: Define an inner function inside an outer function and access outer function variable inside the inner function.


function outerFunction() {
  let outerVar = "Outer variable";

  function innerFunction() {
    console.log("Accessing:", outerVar);
  }

  innerFunction();
}

outerFunction();