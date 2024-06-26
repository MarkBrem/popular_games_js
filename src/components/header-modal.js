const closeModalBtnRef = document.querySelector('[data-action="close-modal"]');
const backdropModalRef = document.querySelector('.modal-backdrop');
const formRef = document.querySelector('.modal-form')
const nameRef = document.querySelector('.greeting')


closeModalBtnRef.addEventListener('click', onCloseModal);
backdropModalRef.addEventListener('click', onBackdropClose);
formRef.addEventListener('submit', onSubmit)

function onCloseModal() {
backdropModalRef.classList.add('is-hidden');
};
function onBackdropClose(event) {
if (event.target === event.currentTarget){
onCloseModal();
};
};
function onSubmit(event){
event.preventDefault();
console.log(event.currentTarget);
    onCloseModal()
    nameRef.textContent = `Вітаємо, ${event.currentTarget.elements.nameUser.value}`
}

// const openModalBtn = document.querySelector('[data-action="open-modal"]');
// const closeModalBtn = document.querySelector('[data-action="close-modal"]');
// const backdrop = document.querySelector('.js-backdrop');



// openModalBtn.addEventListener('click', onOpenModal)
// function onOpenModal() {
// document.body.classList.add('show-modal')

// }
