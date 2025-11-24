function makeMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log(triple(5));

// Closure explanation:
// The inner function remembers the value of "multiplier"
// even after makeMultiplier() finishes execution.
