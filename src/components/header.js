const dropdownBtnRef = document.querySelector('.dropdown-btn')
const dropdownContentRef = document.querySelector('.dropdown-content')




    dropdownBtnRef.addEventListener('click', onClick);

    function onClick (event){
        dropdownContentRef.classList.toggle('is-open')
    
    };



    

