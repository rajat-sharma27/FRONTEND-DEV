'use strict';
// Q1 – Dynamic Data Parser
// Tasks: convert each value to Number, Boolean, String; skip invalid numbers and log them separately.
// Comments: Demonstrates Number conversion quirks, trimming for empty spaces, and NaN checks.

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

function safeNumberConversion(val) {
  // Convert to number in a safe way
  // null -> 0, undefined -> NaN; string with px -> NaN; " " -> 0 after trim -> 0 but considered invalid here by task
  try {
    if (val === null) return Number(val); // 0
    if (typeof val === 'string') {
      const trimmed = val.trim();
      if (trimmed === '') {
        // task wants " " considered invalid number
        throw new Error('InvalidNumber: empty string');
      }
      // If string contains non-numeric characters (like '100px') Number() -> NaN
      const num = Number(trimmed);
      if (Number.isNaN(num)) throw new Error('InvalidNumber: NaN result');
      return num;
    }
    return Number(val);
  } catch (e) {
    throw e;
  }
}

for (let i = 0; i < apiData.length; i++) {
  const raw = apiData[i];
  const asString = String(raw);
  const asBoolean = Boolean(raw);
  let asNumber;
  try {
    asNumber = safeNumberConversion(raw);
    validNumbers.push(asNumber);
    console.log(`Index ${i}: raw=`, raw, '| Number =', asNumber, ', Boolean =', asBoolean, ', String =', asString);
  } catch (err) {
    // collect invalid numbers
    invalidNumbers.push({ index: i, value: raw, reason: err.message });
    console.log(`Index ${i}: raw=`, raw, '-> INVALID NUMBER (reason:', err.message + ')', ', Boolean =', asBoolean, ', String =', asString);
  }
}

// Detailed report
console.log('\n=== Detailed Report Q1 ===');
console.log('Valid numeric data array:', validNumbers);
console.log('Invalid numeric entries:', invalidNumbers);

// Hoisting / debug observations (commented):
// - No hoisting issues in this file because we use function declarations and let/const.
// - Using 'use strict' helps catch accidental globals (if we wrote x = 1 it would throw).
// - Number('NaN') -> NaN; Number(' ') -> 0; Number(null) -> 0; Number(undefined) -> NaN.
// - We intentionally treated a trimmed empty string as invalid per task requirement.
