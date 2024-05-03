const paper = document.createElement('button')
const scissors = document.createElement('button')
const rock = document.createElement('button')
const resultList = document.createElement('ul')
const resultItemWin = document.createElement('li')
const resultItemLose = document.createElement('li')
const answer = document.createElement('p')

scissors.classList.add('scissors')
paper.classList.add('paper')
rock.classList.add('rock')
resultList.classList.add('result-list')
resultItemWin.classList.add('win')
resultItemLose.classList.add('lose')
answer.classList.add('answer')



paper.style.background = 'url(./img/rock-scissor-spaper/paper.png)'
rock.style.background = 'url(./img/rock-scissor-spaper/rock.png)'
scissors.style.background = 'url(./img/rock-scissor-spaper/scissors.png)'

paper.addEventListener('click', getChoicePaper)
rock.addEventListener('click', getChoiceRock)
scissors.addEventListener('click', getChoiceScissors)

function computerChoice() {
    const choices = ['папір', 'камінь', 'ножниці']
    const randomIndex = Math.floor(Math.random() * 3)
    return choices[randomIndex]
}

function getChoicePaper(computerChoise) {
    const choicePaper = 'папір';
    if (choicePaper === computerChoice) {
        return answer.textContent = 'Ви програли раунд!'
    } else {
        return answer.textContent = 'Ви виграли раунд!'
    }
}

function getChoiceRock(computerChoise) {
    const choiceRock = 'камінь';
    if (choiceRock === computerChoice) {
        return answer.textContent = 'Ви програли раунд!'
    } else {
        return answer.textContent = 'Ви виграли раунд!'
    }
}

function getChoiceScissors(computerChoise) {
    const choiceScissors = 'ножниці';
    if (choiceScissors === computerChoice) {
        return answer.textContent = 'Ви програли раунд!'
    } else {
        return answer.textContent = 'Ви виграли раунд!'
    }
}

console.log(scissors);
console.log(paper);
console.log(rock);