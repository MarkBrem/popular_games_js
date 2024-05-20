const closeModalBtnRef = document.querySelector('[data-action="close-modal"]');
const backdropModalRef = document.querySelector('.modal-backdrop');
 console.log(closeModalBtnRef); 
 console.log(backdropModalRef);
closeModalBtnRef.addEventListener('click', onCloseModal);
function onCloseModal() {
    backdropModalRef.classList.add('is-hidden');
};

backdropModalRef.addEventListener('click', onBackdropClose);
function onBackdropClose(event) {
    if (event.target === event.currentTarget){
        onCloseModal();
    };
};


function onCloseModal(event){
event.preventDefault();
backdrop.classList('is-hidden')
closeModalBtnRef.addEventListener('submit', onCloseModal)}

// const openModalBtn = document.querySelector('[data-action="open-modal"]');
// const closeModalBtn = document.querySelector('[data-action="close-modal"]');
// const backdrop = document.querySelector('.js-backdrop');



// openModalBtn.addEventListener('click', onOpenModal)
// function onOpenModal() {
// document.body.classList.add('show-modal')

// }
