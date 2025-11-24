// === File: q4_deploy_race_all.js ===
// Two servers: A (2s), B (3s). Use Promise.all and Promise.race
function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Server A failed'));
      resolve('Server A: deployed');
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Server B failed'));
      resolve('Server B: deployed');
    }, 3000);
  });
}

if (require.main === module) {
  Promise.all([serverA(), serverB()])
    .then(results => console.log('Deployment completed for all servers:', results))
    .catch(err => console.error('Deployment error (all):', err.message));

  Promise.race([serverA(), serverB()])
    .then(fast => console.log('Fastest response:', fast))
    .catch(err => console.error('Deployment error (race):', err.message));
}



