const bodyRef = document.querySelector('body');
const dropdownBtnRef = document.querySelector('.dropdown-btn')
const dropdownContentRef = document.querySelector('.dropdown-content')
const buttonThemeRef = document.querySelector('.button-theme');
const moonIconRef = document.querySelector('.moon-icon');
const sunIconRef = document.querySelector('.sun-icon');


    dropdownBtnRef.addEventListener('click', onClick);

    function onClick (event){
        dropdownContentRef.classList.toggle('is-open');
    
    };


  buttonThemeRef.addEventListener('click', changeOnClick);

    function changeOnClick (event){
      bodyRef.classList.toggle('night-theme');
      dropdownBtnRef.classList.toggle('night-theme-btn');

      if(bodyRef.classList.contains('night-theme')){
        moonIconRef.style.display = 'none';
        sunIconRef.style.display = 'inline';
        buttonThemeRef.style.border = '1px solid white'
        sunIconRef.style.textAlign = 'center';

      }else{
        moonIconRef.style.display = 'inline';
        sunIconRef.style.display = 'none';
        buttonThemeRef.style.border = '1px solid black'
        moonIconRef.style.textAlign = 'center';
      }
    };



    

