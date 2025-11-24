//file: q1_async_coffee.js ===
// Async Coffee Maker using Promise chaining
function boilWater() {
return new Promise((resolve, reject) => {
setTimeout(() => {
if (Math.random() < 0.15) return reject(new Error('Boiler malfunction'));
console.log('Water boiled');
resolve('boiled water');
}, 1000 + Math.random() * 1000);
});
}


function brewCoffee(boiled) {
return new Promise((resolve, reject) => {
setTimeout(() => {
if (Math.random() < 0.15) return reject(new Error('Coffee grounds missing'));
console.log('Coffee brewed using', boiled);
resolve('brewed coffee');
}, 1000 + Math.random() * 1000);
});
}


function pourIntoCup(coffee) {
return new Promise((resolve, reject) => {
setTimeout(() => {
if (Math.random() < 0.1) return reject(new Error('Cup broke'));
console.log('Poured into cup:', coffee);
resolve('Coffee ready for the team!');
}, 1000 + Math.random() * 1000);
});
}


// Use Promise chaining as requested
function makeCoffee() {
boilWater()
.then(brewCoffee)
.then(pourIntoCup)
.then(msg => console.log(msg))
.catch(err => console.error('Coffee process failed:', err.message));
}


// Run when executed directly
if (require.main === module) makeCoffee();