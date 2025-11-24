function Person(name) {
    this.name = name;
}
Person.prototype.showName = function() {
    console.log(`Name: ${this.name}`);
}

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function() {
    console.log(`Department: ${this.department}`);
}

function Professor(name, department, specialization) {
    Faculty.call(this, name, department);
    this.specialization = specialization;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.showSpecialization = function() {
    console.log(`Specialization: ${this.specialization}`);
}

const prof = new Professor("Deepak", "CS", "AI");
prof.showName();
prof.showDepartment();
prof.showSpecialization();
