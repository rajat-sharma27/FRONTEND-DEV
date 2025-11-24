// Q9 - Fitness App Analytics

const data = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
  constructor(dataset) {
    if (!dataset || dataset.length === 0) throw new Error("Dataset is empty");
    this.dataset = dataset;
  }

  getActiveUsers() {
    return this.dataset.filter(u => u.steps > 7000);
  }

  getAverageCalories() {
    const total = this.dataset.reduce((sum, u) => sum + u.calories, 0);
    return total / this.dataset.length;
  }

  getUserSummary() {
    return this.dataset.map(u => `${u.user} burned ${u.calories} calories today.`);
  }
}

const app = new FitnessAnalytics(data);

console.log(app.getActiveUsers());
console.log(app.getAverageCalories());
console.log(app.getUserSummary());
