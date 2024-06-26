const formRef = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.backdrop');

 


formRef.addEventListener('submit', onOpenModal)
function onOpenModal(event) {
    event.preventDefault()
    if (event.currentTarget.elements.mail.value !== '') {
        backdrop.classList.add('show')
    }
 alert('Введіть свою ел.адресу')
}

closeModalBtn.addEventListener('click', onCloseModal)
function onCloseModal() {
backdrop.classList.remove('show')}