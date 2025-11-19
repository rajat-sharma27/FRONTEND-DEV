'use strict';
const buttons = document.querySelectorAll('button[data-theme]');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const t = btn.getAttribute('data-theme');
    document.body.setAttribute('data-theme', t); // apply via setAttribute
    // save in data-theme attribute already done above; could also store to localStorage if wanted
    document.body.setAttribute('data-theme', t);
    console.log('Theme set to', t);
  });
});
