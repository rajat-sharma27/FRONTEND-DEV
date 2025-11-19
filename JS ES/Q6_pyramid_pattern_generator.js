'use strict';
// Q6 – Pyramid Pattern Generator
// Generate:
// *
// * *
// * * *
// * * * *
//
// Tasks include replacing let with var, adding outer loop limit controlled by user input (default 5).
// Using console.log output only.

function generatePyramid(limit = 5) {
  'use strict';
  for (let i = 1; i <= limit; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row += '* ';
    }
    console.log(row.trim());
  }
}

console.log('Default pyramid (limit=4 as sample):');
generatePyramid(4);

console.log('\nUsing var instead of let (observe scoping differences):');
function generatePyramidWithVar(limit = 4) {
  // older var-based scoping can create bugs when using asynchronous callbacks; here it works but variables are function-scoped.
  for (var i = 1; i <= limit; i++) {
    var row = '';
    for (var j = 0; j < i; j++) {
      row += '* ';
    }
    console.log(row.trim());
  }
}

generatePyramidWithVar(4);

// Debugging note: with 'use strict' undeclared variables would throw a ReferenceError if accidentally used.
// To observe variable reuse, place a breakpoint inside loops and inspect 'i' and 'j' across iterations.
