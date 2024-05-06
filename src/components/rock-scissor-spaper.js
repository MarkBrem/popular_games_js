const rockScissorsPaper = document.getElementById('3')

const paper = document.createElement('button')
const scissors = document.createElement('button')
const rock = document.createElement('button')
const buttonList = document.createElement('ul')
const paperItem = document.createElement('li')
const rockItem = document.createElement('li')
const scissorItem = document.createElement('li')
const answer = document.createElement('p')
const results = document.createElement('ul')
const resultsTitle = document.createElement('p')
const resultsItem = document.createElement('li')
const win = document.createElement('p')
const winItem = document.createElement('li')
const lose = document.createElement('p')
const loseItem = document.createElement('li')
const computer = document.createElement('p')
 
scissors.classList.add('scissors')
scissors.classList.add('rockScissorsPaper-button')
paper.classList.add('paper')
paper.classList.add('rockScissorsPaper-button')
rock.classList.add('rock')
rock.classList.add('rockScissorsPaper-button')
buttonList.classList.add('buttonList')
paperItem.classList.add('paperItem')
rockItem.classList.add('rockItem')
scissorItem.classList.add('scissorItem')
answer.classList.add('answer')
results.classList.add('results')
win.classList.add('win')
winItem.classList.add('winItem')
lose.classList.add('lose')
loseItem.classList.add('loseItem')
resultsTitle.classList.add('resultsTitle')
resultsItem.classList.add('resultsItem')
computer.classList.add('computer')

rockScissorsPaper.append(buttonList)
rockScissorsPaper.append(results)
rockScissorsPaper.append(answer)
rockScissorsPaper.append(computer)
buttonList.append(paperItem)
buttonList.append(rockItem)
buttonList.append(scissorItem)
results.append(resultsItem)
results.append(winItem)
results.append(loseItem)
paperItem.append(paper)
rockItem.append(rock)
scissorItem.append(scissors)
loseItem.append(lose)
winItem.append(win)
resultsItem.append(resultsTitle)

let winNumber = 0
let loseNumber = 0
const choices = ['папір', 'камінь', 'ножниці']

answer.style.marginRight = '455px';
answer.style.marginLeft = '455px';
answer.style.marginTop = '36px';
answer.style.marginBottom = '36px';
answer.style.fontSize = '12px';

resultsTitle.textContent = 'Рахунок:'
 
paper.addEventListener('click', () => {
    const choice = computerChoice(choices)
    console.log(choice);
    getChoicePaper(choice)
})
rock.addEventListener('click', () => {
    const choice = computerChoice(choices)
    getChoiceRock(choice)
})
scissors.addEventListener('click', () => {
    const choice = computerChoice(choices)
    getChoiceScissors(choice)
})

// function winFunction() {
//     answer.textContent = 'Ви виграли раунд!'
//     answer.style.color = '#039900'
//     winNumber += 1
//     win.textContent = `Ви - ${winNumber}`
// }

// function loseFunction() {
//     answer.textContent = 'Ви програли раунд!',
//     answer.style.color = '#ff0000',
//     loseNumber += 1
//     lose.textContent = `Комп'ютер- ${loseNumber}`
// }

// function drawFunction() {
//     answer.textContent = 'Нічия'
//     answer.style.color = '#000'
// }
    
function computerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * (4 - 1) + 1)
    computer.textContent = choices[randomIndex - 1]
    console.log(randomIndex - 1);
    console.log(choices[2]);
    return choices[randomIndex];
}

function getChoicePaper(computerChoice) {
    const choicePaper = 'папір';
    console.log(choicePaper === computerChoice);
    if (choicePaper === computerChoice) {
        answer.textContent = 'Нічия'
    answer.style.color = '#000'
    } else if ((choicePaper === 'папір' && computerChoice === 'ножниці')) {
        answer.textContent = 'Ви програли раунд!',
    answer.style.color = '#ff0000',
    loseNumber += 1
    lose.textContent = `Комп'ютер- ${loseNumber}`
    } else {
        answer.textContent = 'Ви виграли раунд!'
    answer.style.color = '#039900'
    winNumber += 1
    win.textContent = `Ви - ${winNumber}`
    }
}

function getChoiceRock(computerChoice) {
    const choiceRock = 'камінь';
     if (choiceRock === computerChoice) {
        answer.textContent = 'Нічия'
    answer.style.color = '#000'
    } else if ((choiceRock === 'камінь' && computerChoice === 'папір')) {
        answer.textContent = 'Ви програли раунд!',
    answer.style.color = '#ff0000',
    loseNumber += 1
    lose.textContent = `Комп'ютер- ${loseNumber}`
    } else {
        answer.textContent = 'Ви виграли раунд!'
    answer.style.color = '#039900'
    winNumber += 1
    win.textContent = `Ви - ${winNumber}`
    }
}

function getChoiceScissors(computerChoice) {
    const choiceScissors = 'ножниці';
     if (choiceScissors === computerChoice) {
        answer.textContent = 'Нічия'
    answer.style.color = '#000'
    } else if ((choiceScissors === 'ножниці' && computerChoice === 'камінь')) {
        answer.textContent = 'Ви програли раунд!',
    answer.style.color = '#ff0000',
    loseNumber += 1
    lose.textContent = `Комп'ютер- ${loseNumber}`
    } else {
        answer.textContent = 'Ви виграли раунд!'
    answer.style.color = '#039900'
    winNumber += 1
    win.textContent = `Ви - ${winNumber}`
    }
}