// Q1 - Student Result Processing

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    const total = this.marks.reduce((sum, m) => sum + m, 0);
    return total / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 90) return "A";
    else if (avg >= 75) return "B";
    else if (avg >= 50) return "C";
    return "F";
  }
}

const s1 = new Student("John", [90, 85, 92]);
const s2 = new Student("Sara", [70, 75, 65]);
const s3 = new Student("Mike", [45, 50, 40]);

console.log(s1.name, s1.getGrade());
console.log(s2.name, s2.getGrade());
console.log(s3.name, s3.getGrade());
