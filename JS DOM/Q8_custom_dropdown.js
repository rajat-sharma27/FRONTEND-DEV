'use strict';
const toggle = document.getElementById('toggle');
const opts = document.getElementById('opts');
const dd = document.getElementById('dd');
toggle.addEventListener('click', (e) => { opts.style.display = opts.style.display === 'block' ? 'none' : 'block'; e.stopPropagation(); });

opts.addEventListener('click', (e) => {
  const o = e.target.closest('div[data-value]');
  if (!o) return;
  toggle.textContent = o.textContent;
  opts.style.display = 'none';
});

// closing using capturing phase
document.addEventListener('click', (e) => {
  // this runs in bubbling by default; to use capturing, add third arg true where listener is added - shown below
}, true);

// attach capturing listener to close when clicking outside
document.addEventListener('click', (e) => {
  if (!dd.contains(e.target)) opts.style.display = 'none';
}, true);
