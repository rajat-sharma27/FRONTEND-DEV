// === File: q9_event_loop_debug.js ===
// Predict output in comments, then run to compare
/*
Predicted output:
Script start
Script end
Promise callback
Timeout callback
Reason: Promise microtask runs before macrotask (setTimeout) after the script finishes.
*/

console.log('Script start');
setTimeout(() => console.log('Timeout callback'), 0);
Promise.resolve().then(() => console.log('Promise callback'));
console.log('Script end');



