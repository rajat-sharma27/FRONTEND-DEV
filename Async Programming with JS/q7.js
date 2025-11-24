// === File: q7_allSettled.js ===
// Use Promise.allSettled to load profile, posts, messages
function loadProfile() { return new Promise((resolve, reject) => setTimeout(() => {
  if (Math.random() < 0.2) return reject('Profile failed');
  resolve('Profile Loaded');
}, 2000)); }

function loadPosts() { return new Promise((resolve, reject) => setTimeout(() => {
  if (Math.random() < 0.2) return reject('Posts failed');
  resolve('Posts Loaded');
}, 1500)); }

function loadMessages() { return new Promise((resolve, reject) => setTimeout(() => {
  if (Math.random() < 0.2) return reject('Messages failed');
  resolve('Messages Loaded');
}, 1000)); }

async function runAllSettled() {
  const start = Date.now();
  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
  const end = Date.now();
  results.forEach((r, i) => {
    const name = ['Profile', 'Posts', 'Messages'][i];
    if (r.status === 'fulfilled') console.log(`${name}: succeeded -> ${r.value}`);
    else console.log(`${name}: failed -> ${r.reason}`);
  });
  console.log('Total time (ms):', end - start);
}

if (require.main === module) runAllSettled();



