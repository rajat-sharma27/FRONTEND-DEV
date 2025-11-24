// Q5 - Ride Sharing Application

class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(from, to, distance) {
    this.from = from;
    this.to = to;
    this.distance = distance;
  }

  calculateFare() {
    if (!this.distance || this.distance < 0) {
      throw new Error("Invalid distance provided.");
    }
    return this.distance * 15;
  }
}

try {
  const ride = new Trip("Delhi", "Noida", 10);
  console.log("Fare:", ride.calculateFare());
} catch (err) {
  console.error(err.message);
}
