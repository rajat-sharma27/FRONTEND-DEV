// Q6: Employee Management System

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += (this.salary * percent) / 100;
    }
}

const employees = [
    new Employee(1, "Amit", "IT", 40000),
    new Employee(2, "Riya", "HR", 35000),
    new Employee(3, "Karan", "Finance", 50000),
    new Employee(4, "Meera", "IT", 45000),
    new Employee(5, "Raj", "Sales", 30000)
];

employees.forEach(e => e.applyBonus(10));

const totalPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
console.log("Total Annual Payout:", totalPayout);
