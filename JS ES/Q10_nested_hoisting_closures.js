'use strict';
// Q10 – Nested Hoisting and Closures
function outer() {
  // var count is hoisted inside outer: declaration hoisted, initialized to undefined at start of function
  console.log('outer before declaration:', count); // undefined
  var count = 5;
  function inner() {
    // inner has its own var count which is hoisted in inner scope
    console.log('inner before declaration:', count); // undefined (inner's hoisted var shadows outer's)
    var count = 10;
    console.log('inner after declaration:', count); // 10
  }
  inner();
  console.log('outer after inner call:', count); // 5
}
outer();

// Arrow inner function version
function outerArrow() {
  var count = 5;
  const innerArrow = () => {
    // arrow does not create its own 'this' or hoisted var; but if we declare var count inside arrow it shadows outer
    // To demonstrate similar behavior, we'll declare a let count inside a block to show difference
    // If we do not declare, it will access the outer count.
    console.log('innerArrow accessing outer count:', count);
  };
  innerArrow();
}
outerArrow();

console.log('\n// Explanation:');
console.log('- Output shows undefined due to hoisting of var declarations inside each function.');
console.log('- Each function has its own variable environment; inner var shadows outer var when declared.');
console.log('- Arrow functions capture surrounding lexical scope; if they do not declare a local variable with same name they will refer to outer variable.');
