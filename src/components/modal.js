const closeBtnRef = document.querySelector('.open')
const backdropRef = document.querySelector('.backdrop')
console.log(closeBtnRef);
closeBtnRef.addEventListener('click', () => {
    console.log('hello');
    backdropRef.classList.add('show')
})