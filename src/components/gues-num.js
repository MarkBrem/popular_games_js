
// import icon from './img/logo'
const gameItem = document.getElementById('2') 
console.log(gameItem);

const guesNumContainer = document.createElement("div")
guesNumContainer.classList.add("forStyle")
gameItem.append(guesNumContainer)

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
form.style.position = "relative"

guesNumContainer.append(form)


const p = document.createElement('p')
p.id = 'result'
p.classList.add('result')

guesNumContainer.append(p)

function checkGuess(inputNum) {
  console.log(inputNum);
   const randomNumber = Math.floor(Math.random() * 10) + 1;
    const userGuess = parseInt(input.value);
    if (userGuess === randomNumber) {
      p.classList.remove("lose")
      p.classList.add("win")
      p.textContent = `Вітаю, ви вгадали число ${randomNumber}!`;
    } else {
      p.classList.remove("win")
      p.classList.add("lose")
      p.textContent = `Ви програли, комп'ютер загадав число ${randomNumber}.`;
    }
  }

  form.addEventListener('submit', onFormSubmit);
  function onFormSubmit(event){
    event.preventDefault();
    const inputValue = input.value;
    checkGuess(inputValue)
    event.currentTarget.reset()
  }

