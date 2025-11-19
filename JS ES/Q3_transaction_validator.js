'use strict';
// Q3 – Transaction Validator
// Tasks: loop transactions, throw custom errors, categorize, print reports, use a breakpoint comment for debugging.

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

class TransactionError extends Error {}
class NegativeAmountError extends TransactionError {}
class MissingFieldError extends TransactionError {}
class NullEntryError extends TransactionError {}

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i];
  try {
    if (tx === null) throw new NullEntryError('Transaction is null');
    if (!('id' in tx) || !('amount' in tx)) throw new MissingFieldError('Missing id or amount');
    if (typeof tx.amount !== 'number') throw new TransactionError('Amount is not a number');
    if (tx.amount < 0) throw new NegativeAmountError('Negative amount not allowed');
    // success
    valid.push(tx);
    console.log(`Transaction ${tx.id} processed successfully. Amount: ${tx.amount}`);
  } catch (err) {
    invalid.push({ index: i, error: err.name, message: err.message, entry: tx });
    console.log(`Transaction at index ${i} failed -> ${err.name}: ${err.message}`);
    // Add a line to set a breakpoint here in VS Code to watch 'tx', 'i', 'err' variables
    // debugger; // <-- place breakpoint here if running in debugger
  }
}

console.log('\n=== Q3 Summary ===');
console.log('Successful transactions count:', valid.length);
console.log('Failed transactions count:', invalid.length);
console.log('Valid array:', valid);
console.log('Invalid array:', invalid);
