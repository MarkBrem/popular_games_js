const bodyRef = document.querySelector('body');
const buttonThemeRef = document.querySelector('.button-theme');

  buttonThemeRef.addEventListener('click', onClick);

    function onClick (event){
      bodyRef.classList.toggle('night-theme');
      dropdownBtnRef.classList.toggle('night-theme-btn')
    };