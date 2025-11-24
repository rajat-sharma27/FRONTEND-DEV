// === File: q5_callbackhell_and_async.js ===
// 5-stage pipeline: design -> build -> test -> deploy -> celebrate
// First: nested callbacks (callback hell)
function stage(name, cb) {
  setTimeout(() => {
    console.log(name);
    cb && cb();
  }, 1000);
}

function pipelineWithCallbacks() {
  stage('design', () => {
    stage('build', () => {
      stage('test', () => {
        stage('deploy', () => {
          stage('celebrate', () => console.log('Done (callback version)'));
        });
      });
    });
  });
}

// Now: async/await version
function stagePromise(name) {
  return new Promise(resolve => setTimeout(() => {
    console.log(name);
    resolve(name);
  }, 1000));
}

async function pipelineAsync() {
  await stagePromise('design');
  await stagePromise('build');
  await stagePromise('test');
  await stagePromise('deploy');
  await stagePromise('celebrate');
  console.log('Done (async/await version)');
}

// Comments: async/await flattens the control flow, avoids deep nesting, and makes
// error handling simpler via try/catch instead of handling errors in multiple callbacks.

if (require.main === module) {
  console.log('\n-- Callback Hell Version --');
  pipelineWithCallbacks();
  setTimeout(() => {
    console.log('\n-- Async/Await Version (starts after callbacks) --');
    pipelineAsync();
  }, 7000); // wait so outputs are readable separately
}



