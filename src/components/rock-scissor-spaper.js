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

rockScissorsPaper.append(buttonList)
rockScissorsPaper.append(results)
rockScissorsPaper.append(answer)
buttonList.append(paperItem)
buttonList.append(rockItem)
buttonList.append(scissorItem)
results.append(resultsItem)
results.append(winItem)
results.append(loseItem)
paperItem.append(paper)
rockItem.append(rock)
scissorItem.append(scissors)
winItem.append(win)
loseItem.append(lose)
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
win.textContent = `Ви виграли - ${winNumber}`
lose.textContent = `Ви програли - ${loseNumber}`
 
paper.addEventListener('click', getChoicePaper)
rock.addEventListener('click', getChoiceRock)
scissors.addEventListener('click', getChoiceScissors)

function computerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * (4 - 1) + 1)
    return choices[randomIndex];;
}

function getChoicePaper(computerChoiсe) {
    const choicePaper = 'папір';
    if (choicePaper === computerChoice) {
        return answer.textContent = 'Нічия'
    } else if ((choicePaper === 'папір' && computerChoice === 'папір')) {
        return answer.textContent = 'Ви програли раунд!', answer.style.color = '#ff0000', loseNumber += 1
    } else {
        return answer.textContent = 'Ви виграли раунд!', answer.style.color = '#039900', winNumber += 1
    }
}

function getChoiceRock(computerChoice) {
    const choiceRock = 'камінь';
     if (choiceRock === computerChoice) {
        return answer.textContent = 'Нічия'
    } else if ((choiceRock === 'камінь' && computerChoice === 'камінь')) {
        return answer.textContent = 'Ви програли раунд!', answer.style.color = '#ff0000', loseNumber += 1
    } else {
        return answer.textContent = 'Ви виграли раунд!', answer.style.color = '#039900', winNumber += 1
    }
}

function getChoiceScissors(computerChoice) {
    const choiceScissors = 'ножниці';
     if (choiceScissors === computerChoice) {
        return answer.textContent = 'Нічия'
    } else if ((choiceScissors === 'ножниці' && computerChoice === 'ножниці')) {
        return answer.textContent = 'Ви програли раунд!', answer.style.color = '#ff0000', loseNumber += 1
    } else {
        return answer.textContent = 'Ви виграли раунд!', answer.style.color = '#039900', winNumber += 1
    }
}