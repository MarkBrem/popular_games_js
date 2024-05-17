const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.js-backdrop');



openModalBtn.addEventListener('click', onOpenModal)
function onOpenModal() {
document.body.classList.add('show-modal')

}