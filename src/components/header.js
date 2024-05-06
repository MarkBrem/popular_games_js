const dropdownBtnRef = document.querySelector('.dropdown-btn')
const dropdownContentRef = document.querySelector('.dropdown-content')



    dropdownBtnRef.addEventListener('click', onClick);

    function onClick (event){
        dropdownContentRef.classList.add('is-open')

        dropdownBtnRef.addEventListener('click', removeOnClick);

        function removeOnClick(event){

                dropdownContentRef.classList.toggle('is-open')
        }
    
    };

    


    

