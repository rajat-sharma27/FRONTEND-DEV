// Q4 - Employee Inheritance

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} is working.`;
  }
}

class Manager extends Employee {
  work() {
    return `${this.name} is managing the team.`;
  }
}

const emp = new Employee("Alex", "HR");
const mgr = new Manager("Sam", "IT");

console.log(emp.work());
console.log(mgr.work());
