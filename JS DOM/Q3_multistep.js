'use strict';
const steps = [document.getElementById('step1'), document.getElementById('step2'), document.getElementById('step3')];
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errName = document.getElementById('errName');
const errEmail = document.getElementById('errEmail');
const errPassword = document.getElementById('errPassword');
const summary = document.getElementById('summary');
let current = 0;

function show(i) {
  steps.forEach((s, idx) => s.classList.toggle('active', idx === i));
  current = i;
}

document.getElementById('next1').addEventListener('click', () => {
  errName.textContent = '';
  if (!nameInput.value.trim()) { errName.textContent = 'Name required'; return; }
  show(1);
});

document.getElementById('back2').addEventListener('click', () => show(0));
document.getElementById('next2').addEventListener('click', () => {
  errEmail.textContent = '';
  const v = emailInput.value.trim();
  if (!v) { errEmail.textContent = 'Email required'; return; }
  if (!v.includes('@')) { errEmail.textContent = 'Email must contain @'; return; }
  show(2);
});
document.getElementById('back3').addEventListener('click', () => show(1));
document.getElementById('finish').addEventListener('click', () => {
  errPassword.textContent = '';
  if (passwordInput.value.length < 6) { errPassword.textContent = 'Password min 6 chars'; return; }
  // show summary
  summary.style.display = 'block';
  summary.innerHTML = `<h3>Summary</h3><p>Name: ${nameInput.value}</p><p>Email: ${emailInput.value}</p>`;
  steps.forEach(s => s.style.display = 'none');
});
