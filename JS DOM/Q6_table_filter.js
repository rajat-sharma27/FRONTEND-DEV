'use strict';
const search = document.getElementById('search');
const table = document.getElementById('tbl').tBodies[0];
const nores = document.getElementById('nores');
search.addEventListener('input', () => {
  const q = search.value.trim().toLowerCase();
  let any = false;
  for (const row of table.rows) {
    const txt = Array.from(row.cells).map(c => c.textContent.toLowerCase()).join(' ');
    const show = txt.includes(q);
    row.style.display = show ? '' : 'none';
    if (show) any = true;
  }
  nores.style.display = any ? 'none' : '';
});
