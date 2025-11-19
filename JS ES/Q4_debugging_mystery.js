'use strict';
// Q4 – Debugging Mystery
// Original code threw a ReferenceError because 'greeting' was assigned without declaration under strict mode.
// Strict mode disallows implicit globals. Fix by declaring 'let' or 'var'.

function showMessage() {
  // Fix: declare variable properly
  let greeting = "Welcome";
  console.log(greeting);
}
showMessage();

console.log('\n// Explanation:');
console.log('Under strict mode, assigning to an undeclared identifier throws ReferenceError. Declaring with let/var/const creates a local variable and avoids the error.');
// Watch variable: set a breakpoint on the console.log line and observe 'greeting' in the debugger call stack.
