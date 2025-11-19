'use strict';
// Q1 Product List Manager with Event Delegation
const input = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('productList');

function createItem(name) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = name;
  span.className = 'name';
  const controls = document.createElement('div');
  controls.className = 'controls';
  const edit = document.createElement('button');
  edit.textContent = 'Edit';
  edit.dataset.action = 'edit';
  const del = document.createElement('button');
  del.textContent = 'Delete';
  del.dataset.action = 'delete';
  controls.append(edit, del);
  li.append(span, controls);
  return li;
}

addBtn.addEventListener('click', () => {
  const val = input.value.trim();
  if (!val) return;
  list.appendChild(createItem(val));
  input.value = '';
  input.focus();
});

// Event delegation on parent <ul>
list.addEventListener('click', (e) => {
  const action = e.target.dataset.action;
  if (!action) return;
  const li = e.target.closest('li');
  if (action === 'delete') {
    li.remove();
  } else if (action === 'edit') {
    enterEditMode(li);
  }
});

// Auto-save when clicking outside: listen on document
document.addEventListener('click', (e) => {
  const editing = list.querySelector('li.editing');
  if (!editing) return;
  if (!editing.contains(e.target)) {
    saveEdit(editing);
  }
}, true); // capture to detect outside early

function enterEditMode(li) {
  if (li.classList.contains('editing')) return;
  li.classList.add('editing');
  const nameSpan = li.querySelector('.name');
  const current = nameSpan.textContent;
  const input = document.createElement('input');
  input.className = 'edit-input';
  input.value = current;
  li.insertBefore(input, nameSpan);
  nameSpan.style.display = 'none';
  input.focus();
  // Save on Enter or on blur handled by outer click
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') saveEdit(li);
    if (e.key === 'Escape') cancelEdit(li, current);
  });
}

function saveEdit(li) {
  const input = li.querySelector('.edit-input');
  if (!input) return;
  const newVal = input.value.trim();
  const span = li.querySelector('.name');
  span.textContent = newVal || 'Unnamed Product';
  span.style.display = '';
  input.remove();
  li.classList.remove('editing');
}

function cancelEdit(li, original) {
  const input = li.querySelector('.edit-input');
  const span = li.querySelector('.name');
  span.textContent = original;
  span.style.display = '';
  if (input) input.remove();
  li.classList.remove('editing');
}

// Accessibility note: could add keyboard navigation for full UX.
