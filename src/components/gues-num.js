const gameItem = document.getElementById('2') 
console.log(gameItem);

const input = document.createElement('input')
input.type = 'number'
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
  const p = document.createElement('p')
 p.id = 'result'
  p.classList.add('result')
    p.randomNumber = Math.floor(Math.random() * 9000) + 1;
    const userGuess = parseInt(input.value);

    if (userGuess === randomNumber) {
      document.getElementById('result').textContent = `Вітаю, ви вгадали число ${randomNumber}!`;
    } else {
      document.getElementById('result').textContent = `Ви програли, комп'ютер загадав число ${randomNumber}.`;
    }
  }

  form.addEventListener('submit', onFormSubmit);
  function onFormSubmit(event){
    event.preventDwfault();
    const inputNum = inputNum.value;
    checkGuess(inputNum)
  }

