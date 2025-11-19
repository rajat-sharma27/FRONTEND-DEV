'use strict';
const form = document.getElementById('f');
const nameI = document.getElementById('name');
const emailI = document.getElementById('email');
const passI = document.getElementById('password');
const eName = document.getElementById('eName');
const eEmail = document.getElementById('eEmail');
const ePass = document.getElementById('ePass');
const msg = document.getElementById('msg');

function validate() {
  let ok = true;
  eName.textContent = ''; eEmail.textContent = ''; ePass.textContent = '';
  if (!nameI.value.trim()) { eName.textContent = 'Name required'; ok = false; }
  if (!emailI.value.trim()) { eEmail.textContent = 'Email required'; ok = false; }
  else if (!emailI.value.includes('@')) { eEmail.textContent = 'Email must contain @'; ok = false; }
  if (passI.value.length < 6) { ePass.textContent = 'Password must be at least 6 chars'; ok = false; }
  return ok;
}

form.addEventListener('submit', (e) => {
  if (!validate()) { e.preventDefault(); msg.textContent = ''; return; }
  e.preventDefault();
  msg.textContent = 'Form Submitted Successfully';
  form.reset();
});

// Live clearing of errors
[nameI, emailI, passI].forEach(input => {
  input.addEventListener('input', () => {
    validate();
  });
});
