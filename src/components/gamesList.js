const gameListEl = document.querySelector('.js-game-list')

const games = [
{
id: 1,
name: 'Високосний калькулятор',
category: 'numerical',

},
{
id: 2,
name: 'Вгадай число',
category: 'numerical',

},
{
id: 3,
name: 'Камінь-Ножиці-Папір',
category: 'game',

},
{
id: 4,
name: 'Калькулятор',
category: 'numerical',

},
{
id: 5,
name: 'Калькулятор часу',
category: 'numerical',

},
{
id: 6,
name: 'Google динозаврик',
category: 'game',

},
{
id: 7,
name: 'Футбол',
category: 'game',

},
{
id: 8,
name: 'Найбільше число',
category: 'numerical',

},
{
id: 9,
name: 'Наша команда',
category: 'acquaintance',

},
{
id: 10,
name: 'Вчений',
category: 'acquaintance',

},
]

function creatEl(games) {
    return games.map((game) => {
        return `
        <li id=${game.id} class = "items-js">
            <h1 style="
            ">${game.name}</h1>
        </li>
        `
    }).join('')
        
}

const items = creatEl(games)
gameListEl.insertAdjacentHTML('beforeend', items)