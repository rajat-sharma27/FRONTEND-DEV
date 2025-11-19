'use strict';
const grid = document.getElementById('grid');
const modal = document.getElementById('modal');
grid.addEventListener('click', (e) => {
  const img = e.target.closest('img');
  if (!img) return;
  showModal(img.src);
});

function showModal(src) {
  modal.innerHTML = `<div class="modal" id="modalInner"><div class="box"><img src='${src}' style='max-width:80vw; max-height:80vh;' alt='preview'></div></div>`;
  modal.style.display = 'block';
  // clicking outside closes modal
  const modalInner = document.getElementById('modalInner');
  modalInner.addEventListener('click', () => { modal.style.display = 'none'; modal.innerHTML=''; });
  // stopPropagation on box so clicking inside doesn't close
  modalInner.querySelector('.box').addEventListener('click', (ev) => ev.stopPropagation());
}
