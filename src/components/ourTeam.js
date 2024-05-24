const student1 = {
    name:`Єгор`,
    work:`Верска хедеру, Google динозаврик`,
    image:`url`
};

const student2 = {
    name:`Арсеній`,
    work:`Верстка модального вікна, Калькулятор року народження`,
    image:`url`
};

const student3 = {
    name:`Марко`,
    work:`Верстка секції з карточками інтерактивної частини сайту, Гра камінь-ножниці-папір`,
    image:`url`
}

const student4 = {
    name:`Маріна`,
    work:`Верстка футеру, Загадувач чисел`,
    image:`url`
}

const student5 = {
    name:`Артем`,
    work:`Сума-різниця-множення-ділення, `,
    image:`url`
}

const student6 = {
    name:`Влад`,
    work:`Калькулятор часу, Ця секція`,
    image:`url`
}

const student7 = {
    name:`Деніс`,
    work:`Гра з м'ячем`,
    image:`url`
}

const student8 = {
    name:`Дем'ян`,
    work:`Найбільше з 3 чисел`,
    image:`url`
}

const student9 = {
    name:`Лера`,
    work:`Задачі з вченими`,
    image:`url`
}

const gameContainer = document.getElementById ('') {

}

const teamMarkup = students.map(student => {
    return `
    <div class="main-module-2">
    <div class="upper-slider-text">
    <p class="main-text-slider">Наша команда</p>
    </div>
    <ul class="array-1">
    <li class="creator1">
    <img class="creator1-image" src="${student.image}" alt="creator image">
    <p class="creator1-name">${student.name}</p>
    <p class="creator1-work">${student.work}</p>
    </li>
    <li class="creator2">
    <img class="creator2-image" src="${student.image}" alt="creator image">
    <p class="creator2-name">${student.name}</p>
    <p class="creator2-work">${student.work}</p>
    </li>
    <li class="creator3">
    <img class="creator3-image" src="${student.image}" alt="creator image">
    <p class="creator3-name">${student.name}</p>
    <p class="creator3-work">${student.work}</p>
    </li>
    </ul>
    <ul class="array-2">
    <li class="creator4">
    <img class="creator4-image" src="${student.image}" alt="creator image">
    <p class="creator4-name">${student.name}</p>
                <p class="creator4-work">${student.work}</p>
            </li>
            <li class="creator5">
                <img class="creator5-image" src="${student.image}" alt="creator image">
                <p class="creator5-name">${student.name}</p>
                <p class="creator5-work">${student.work}</p>
            </li>
            <li class="creator6">
                <img class="creator6-image" src="${student.image}" alt="creator image">
                <p class="creator6-name">${student.name}</p>
                <p class="creator6-work">${student.work}</p>
            </li>
        </ul>
        <ul class="array-3">
            <li class="creator7">
                <img class="creator7-image" src="${student.image}" alt="creator image">
                <p class="creator7-name">${student.name}</p>
                <p class="creator7-work">${student.work}</p>
            </li>
            <li class="creator8">
                <img class="creator8-image" src="${student.image}" alt="creator image">
                <p class="creator8-name">${student.name}</p>
                <p class="creator8-work">${student.work}</p>
            </li>
            <li class="creator9">
                <img class="creator9-image" src="${student.image}" alt="creator image">
                <p class="creator9-name">${student.name}</p>
                <p class="creator9-work">${student.work}</p>
            </li>
        </ul>
    </div>
    `
}).join('')