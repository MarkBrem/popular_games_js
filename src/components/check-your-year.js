const yourYearDocument = document.getElementById('1');
yourYearDocument.classList.add = 'your-year-li';
console.log(yourYearDocument);

const formYear = document.createElement('form');

const inputYear = document.createElement('input');
inputYear.type = 'number';
inputYear.classList.add('input-year');
inputYear.placeholder = 'Введіть рік народження';


const buttonYear = document.createElement('button');
buttonYear.type = 'submit';
buttonYear.classList.add('button-year');


const textYear = document.createElement('p');


yourYearDocument.append(textYear);
yourYearDocument.append(formYear);
formYear.append(inputYear, buttonYear);


const culculateYourYear = function(inputYear){
    if(inputYear % 4 === 0){
        textYear.textContent = 'Ви народилися у високосний рік!';
    } else{
        textYear.textContent = 'Ви народилися не у високосний рік!';
    }   
};

formYear.addEventListener('submit', onFormSubmit);
function onFormSubmit(event){
    event.preventDefault();
    const inputValue = inputYear.value;
    culculateYourYear(inputValue);
}