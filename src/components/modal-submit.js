const formRef = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.backdrop');

 


formRef.addEventListener('submit', onOpenModal)
function onOpenModal(event){
event.preventDefault();
backdrop.classList.add('is-hidden')



}

closeModalBtn.addEventListener('click', onCloseModal)
function onCloseModal() {
backdrop.classList.remove('is-hidden')}