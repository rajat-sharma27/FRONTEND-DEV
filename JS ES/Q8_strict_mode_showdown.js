// Q8 – Strict Mode Showdown
// Demonstrate differences with and without 'use strict' for duplicate params, implicit globals, and delete behavior.
// We'll run two variants programmatically and log the outcomes.

function runNonStrict() {
  // intentionally not using 'use strict' here
  function demo(a, a2) { // duplicate names allowed in non-strict (second overrides)
    total = 10; // implicit global allowed in non-strict
    // delete total; // deleting a variable declared as implicit global may fail silently; will not throw
    return { a: a, a2: a2, totalExists: typeof total !== 'undefined' };
  }
  try {
    const res = demo(5, 10);
    console.log('Non-strict result:', res);
    // cleanup implicit global
    try { delete globalThis.total; } catch(e) {}
  } catch (err) {
    console.log('Non-strict threw:', err);
  }
}

function runStrict() {
  'use strict';
  try {
    function demo(a, a) {
      // duplicate parameter name should throw a SyntaxError in strict mode at parse time
      return null;
    }
  } catch (e) {
    console.log('Strict mode duplicate param error:', e.name, e.message);
  }
  try {
    // implicit global assignment
    // eslint-disable-next-line no-undef
    total = 10; // ReferenceError in strict mode
  } catch (e) {
    console.log('Strict mode implicit global error:', e.name, e.message);
  }
}

console.log('--- Running non-strict demo ---');
runNonStrict();
console.log('\n--- Running strict demo ---');
runStrict();

console.log('\n// Explanation: In strict mode duplicate parameter names and implicit globals are illegal. Also delete of variables is not allowed.');
