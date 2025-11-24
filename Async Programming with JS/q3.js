// === File: q3_getBugs.js ===
// Convert callback-based fetchBugs to promise-based getBugs
function fetchBugs(callback) {
  setTimeout(() => callback(['UI glitch', 'API timeout', 'Login failure']), 1000);
}

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // simulate random API failure
      if (Math.random() < 0.2) return reject(new Error('Failed to fetch bugs'));
      resolve(['UI glitch', 'API timeout', 'Login failure']);
    }, 1000);
  });
}

// Usage
if (require.main === module) {
  getBugs()
    .then(bugs => {
      console.log('Bugs received:');
      console.table(bugs.map((b, i) => ({ id: i + 1, bug: b })));
    })
    .catch(err => console.error('Error fetching bugs:', err.message));
}




