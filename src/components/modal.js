const openModalBtnRef = document.querySelector('[data-action="open-modal"]');
const closeModalBtnRef = document.querySelector['[data-action="close-modal"]'];
const backdropModalRef = document.querySelector('.modal-backdrop');
console.log(openModalBtnRef)
openModalBtnRef.addEventListener('click', onOpenModal);
function onOpenModal() {
    console.log('hello')
    backdropModalRef.classList.add('show-modal');
};
closeModalBtnRef.addEventListener('click', onCloseModal);
function onCloseModal() {
    backdropModalRef.classList.remove('show-modal')
};

backdropModalRef.addEventListener('click', onBackdropClose);
function onBackdropClose(event) {
    if (event.target === event.currentTarget){
        onCloseModal();
    };
};

