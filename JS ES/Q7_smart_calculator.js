'use strict';
// Q7 – Smart Calculator
// Supports add, divide, power, root, subtract with error handling

class InvalidOperationError extends Error {}
class MathDomainError extends Error {}

const operations = ['add', 'divide', 'power', 'root', 'subtract'];
const num1 = 25, num2 = 0;

function calculate(op, a, b) {
  switch (op) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'divide':
      if (b === 0) throw new MathDomainError('DivideByZero');
      return a / b;
    case 'power':
      return Math.pow(a, b);
    case 'root':
      if (a < 0) throw new MathDomainError('RootOfNegativeNumber');
      // b indicates the root degree; if b is 0, that's invalid too
      if (b === 0) throw new MathDomainError('ZeroRootDegree');
      return Math.pow(a, 1 / b);
    default:
      throw new InvalidOperationError('Operation not supported: ' + op);
  }
}

for (let op of operations) {
  try {
    const result = calculate(op, num1, num2);
    console.log(`Operation: ${op} | num1: ${num1} | num2: ${num2} => Result: ${result}`);
  } catch (err) {
    console.log(`Operation: ${op} | Error: ${err.name} - ${err.message}`);
  }
}

console.log('\n// Notes: divide by zero and root domain issues are handled by throwing MathDomainError. Unknown operations throw InvalidOperationError.');
