const team = [
    {
    name:`Єгор`,
    work:`Верска хедеру, Google динозаврик`,
    image:`url`
    },
    {
    name:`Арсеній`,
    work:`Верстка модального вікна, Калькулятор року народження`,
    image:`url`
    },
    {
    name:`Марко`,
    work:`Верстка секції з карточками інтерактивної частини сайту, Гра камінь-ножниці-папір`,
    image:`url`
    },
    {
    name:`Маріна`,
    work:`Верстка футеру, Загадувач чисел`,
    image:`url`
    },
    {
    name:`Артем`,
    work:`Сума-різниця-множення-ділення, `,
    image:`url`
    },
    {
    name:`Влад`,
    work:`Калькулятор часу, Ця секція`,
    image:`url`
},
{
    name:`Деніс`,
    work:`Гра з м'ячем`,
    image:`url`
},
{
    name:`Дем'ян`,
    work:`Найбільше з 3 чисел`,
    image:`url`
},
{
    name:`Лера`,
    work:`Задачі з вченими`,
    image:`url`
},
]

const gameContainer = document.getElementById ('9')

const teamMarkup = team.map(student => {
    return `
        <div class="main-module-2">

        <div class="upper-slider-text">
            <p class="main-text-slider">Наша команда</p>
        </div>
    
    
        <div class="photo-slider">
            <button class="left-slide" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="102" viewBox="0 0 52 102" fill="none">
                    <path d="M51 1L1 51L51 101" stroke="black"/>
                </svg>            
            </button>

            <img class="student-photo" src="${student.image}</p>" alt="student photo">
        
            <button class="right-slide" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="102" viewBox="0 0 52 102" fill="none">
                    <path d="M1 1L51 51L1 101" stroke="black"/>
                </svg>
            </button>
        </div>

        <div class="slider-info">
            <p class="student-name">${student.name}</p>
            <p class="work-info">${student.work}</p>
        </div>

    </div>
    `
}).join('')

gameContainer.insertAdjacentHTML('beforeend', teamMarkup)