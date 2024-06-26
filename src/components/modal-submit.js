
const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.backdrop');

 


openModalBtn.addEventListener('submit', onOpenModal)
function onOpenModal(event){
event.preventDefault();
backdrop.classList.add('show-modal')



}

closeModalBtn.addEventListener('click', onCloseModal)
function onCloseModal() {
backdrop.classList.remove('show-modal')}