// === File: q8_retry_submitOrder.js ===
// Retry mechanism for submitOrder (50% fail rate)
function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) return reject(new Error('Network error'));
      resolve('Order submitted');
    }, 500 + Math.random() * 1500);
  });
}

async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return;
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed`);
      if (attempt === 3) throw new Error('Order could not be processed');
      // small delay before retry
      await new Promise(r => setTimeout(r, 500));
    }
  }
}

if (require.main === module) {
  (async () => {
    try {
      await processOrder();
      console.log('Order processed successfully');
    } catch (err) {
      console.error(err.message);
    }
  })();
}



