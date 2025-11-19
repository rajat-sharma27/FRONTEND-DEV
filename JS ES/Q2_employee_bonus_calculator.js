'use strict';
// Q2 – Employee Bonus Calculator
// Tasks: convert salary and years to number, calculate bonus with validation, template strings, try..catch

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

function calculateBonus(emp) {
  try {
    if (!emp || typeof emp !== 'object') throw new Error('MissingEmployeeObject');
    const name = emp.name || 'Unknown';
    if (!('salary' in emp) || !('years' in emp)) throw new Error('MissingProperty');
    const salary = Number(emp.salary);
    const years = Number(emp.years);
    if (Number.isNaN(salary) || Number.isNaN(years)) throw new Error('ConversionError');
    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
    console.log(`Employee: ${name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)}`);
    return { name, salary, years, bonus };
  } catch (err) {
    console.log(`Error processing employee ${emp && emp.name ? emp.name : 'unknown'}:`, err.message);
    return null;
  }
}

const results = employees.map(calculateBonus);
console.log('\n=== Q2 Results ===');
console.log(results);

// Debug/hoisting notes:
// - 'use strict' prevents creating implicit globals like totalBonus = 0 without declaration.
// - Using Number() requires checking Number.isNaN to validate conversions.
// - try..catch catches missing property errors and conversion errors as required.
