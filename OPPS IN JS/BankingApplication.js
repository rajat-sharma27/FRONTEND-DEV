// Q7 - Banking Application

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (this.#balance < amount) {
      throw new Error("Insufficient balance");
    }
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();

acc.deposit(5000);
console.log(acc.getBalance());

try {
  acc.withdraw(8000);
} catch (err) {
  console.error(err.message);
}
