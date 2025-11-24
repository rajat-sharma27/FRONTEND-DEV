// === File: q10_delivery_pipeline.js ===
// Async delivery pipeline with random 1-2s delays and possible failures
function randomDelay() {
  return 1000 + Math.random() * 1000; // 1-2 seconds
}

function step(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error(`${name} failed`));
      console.log(`Step: ${name}`);
      resolve(name);
    }, randomDelay());
  });
}

async function runPipeline() {
  console.log('Start Pipeline');
  try {
    await step('Order taken');
    await step('Food prepared');
    await step('Package ready');
    await step('Out for delivery');
    await step('Delivered');
    console.log('Delivery completed!');
  } catch (err) {
    console.error('Pipeline failed!', err.message);
  }
}

if (require.main === module) runPipeline();

// End of file bundle. Each section above is intended to be saved as its own .js file.
// To run: save each block into separate files (e.g., q1_async_coffee.js) and run with Node.js:
// node q1_async_coffee.js