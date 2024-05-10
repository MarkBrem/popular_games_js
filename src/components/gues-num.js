const gameItem = document.getElementById('2') 
console.log(gameItem);

const input = document.createElement('input')
gameItem.append(input)
function checkGuess() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const userGuess = parseInt(document.getElementById('userGuess').value);

    if (userGuess === randomNumber) {
      document.getElementById('result').textContent = `Вітаю, ви вгадали число ${randomNumber}!`;
    } else {
      document.getElementById('result').textContent = `Ви програли, комп'ютер загадав число ${randomNumber}.`;
    }
  }