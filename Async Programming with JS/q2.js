// === File: q2_event_loop_demo.js ===
// Demonstrate microtask vs macrotask ordering
console.log('Start');

setTimeout(() => console.log('setTimeout (macrotask)'), 0);

Promise.resolve().then(() => console.log('Promise.then (microtask)'));

console.log('Synchronous log');

console.log('End');

// Explanation (in comments):
// Microtasks (Promise callbacks) run immediately after the currently executing script
// finishes, before the event loop moves on to the next macrotask queue (like setTimeout).
// That's why 'Promise.then (microtask)' prints before the setTimeout callback.



