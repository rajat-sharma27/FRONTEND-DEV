'use strict';
// Q9 – JSON Audit
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];
  try {
    const parsed = JSON.parse(line);
    // validate keys
    if (!('user' in parsed) || !('age' in parsed)) {
      throw new Error('MissingKey');
    }
    // convert age to number
    parsed.age = Number(parsed.age);
    if (Number.isNaN(parsed.age)) throw new Error('AgeConversionError');
    if (parsed.age < 18) {
      // filter out under-18 users (bonus)
      console.log(`Line ${i}: user ${parsed.user} is under 18 (age ${parsed.age}) - filtered out`);
    } else {
      clean.push(parsed);
    }
  } catch (err) {
    errors.push({ line: i, text: line, error: err.message });
    console.log(`Error at line ${i}:`, err.message);
    // debugger; // place breakpoint here to inspect control flow
  }
}

console.log('\n=== Q9 Result ===');
console.log('Clean array:', clean);
console.log('Errors:', errors);
