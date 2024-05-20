
// import icon from './img/logo'
const gameItem = document.getElementById('2') 
console.log(gameItem);

const input = document.createElement('input')
input.type = 'text'
input.id = 'userGuess'
input.classList.add('number')
input.placeholder = 'Введіть число'



const button = document.createElement('button')
button.type = 'submit'
button.classList.add('checkGuess')
button.classList.add('button-input')

const form = document.createElement('form')
form.append(input, button)

gameItem.append(form)


function checkGuess(inputNum) {
  console.log(inputNum);
  const p = document.createElement('p')
 p.id = 'result'
  p.classList.add('result')
   const randomNumber = Math.floor(Math.random() * 10) + 1;
    const userGuess = parseInt(input.value);
console.log(randomNumber, userGuess);
    if (userGuess === randomNumber) {
      console.log(`Вітаю, ви вгадали число ${randomNumber}!`);
      p.textContent = `Вітаю, ви вгадали число ${randomNumber}!`;
    } else {
      p.textContent = `Ви програли, комп'ютер загадав число ${randomNumber}.`;
    }

    gameItem.append(p)
  }

  form.addEventListener('submit', onFormSubmit);
  function onFormSubmit(event){
    event.preventDefault();
    const inputValue = input.value;
    checkGuess(inputValue)
    event.currentTarget.reset()
  }

