const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.js-backdrop');



openModalBtn.addEventListener('submit', onOpenModal)
function onOpenModal(event){
event.preventDefault();
document.body.classList.add('show-modal')



}

closeModalBtn.addEventListener('click', onCloseModal)
function onCloseModal() {
document.body.classList.remove('show-modal')}