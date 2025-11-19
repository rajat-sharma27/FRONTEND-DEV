'use strict';
const area = document.getElementById('area');
const counter = document.getElementById('counter');
const resetBtn = document.getElementById('resetBtn');
const MAX = 100;

area.addEventListener('keydown', (e) => {
  const remaining = MAX - area.value.length;
  if (remaining <= 0 && e.key !== 'Backspace' && e.key !== 'Delete' && !e.ctrlKey) {
    // prevent further typing
    e.preventDefault();
  }
});

area.addEventListener('input', () => {
  let remaining = MAX - area.value.length;
  counter.textContent = remaining;
  counter.className = '';
  if (remaining <= 0) counter.classList.add('red');
  else if (remaining <= 20) counter.classList.add('yellow');
});

resetBtn.addEventListener('click', () => {
  area.value = '';
  counter.textContent = MAX;
  counter.className = '';
  area.focus();
});
