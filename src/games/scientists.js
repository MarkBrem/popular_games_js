const scientistSection = document.getElementById('10')

const scientistsList = document.createElement('ul');

scientistSection.append(scientistsList)

const question = [
    {
        text:'Які вчені народилися в 19 ст.' ,
        id: 1
    },
    {
        text:'Знайти рік народження Albert Einshtein' ,
        id: 2
    },
    {
        text:'Відсортувати вчених за алфавітом',
        id: 3
    },
    {
        text:'Знайти вчених, прізвища яких починаються на на літеру “С” ',
        id: 4

    },
    {
        text:'Відсортувати вчених за кількістю прожитих років',
        id: 5

    },
    {
        text:'Видалити всіх вчених, ім’я яких починається на “А”',
        id: 6

    },
    {
        text:'Знайти вченого, який народився найпізніше',
        id: 7

    },
    {
        text:'Знайти вченого, який прожив найдовше і вченого, який прожив найменше',
        id: 8

    },
    {
        text:'Знайти вчених, в яких співпадають перші літери імені і прізвища',
        id: 9

    }
]
const scientists = [
    {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    photo: "./src/img/scientists/photo1.jpg",
    id: 1
    },
    {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    photo: "url(../src/img/scientist/photo2.jpg)",
    id: 2
    },
    {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    photo: "url(../src/img/scientist/photo3.jpg)",
    id: 3
    },
    {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    photo: "url(../src/img/scientist/photo4.jpg)",
    id: 4
    },
    {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    photo: "url(../src/img/scientist/photo5.jpg)",
    id: 5
    },
    {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    photo: "url(../src/img/scientist/photo6.jpg)",
    id: 6
    },
    {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    photo: "url(../src/img/scientist/photo7.jpg)",
    id: 7
    },
    {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    photo: "url(../src/img/scientist/photo8.jpg)",
    id: 8
    },
    {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    photo: "url(../src/img/scientist/photo9.jpg)",
    id: 9
    },
    {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    photo: "url(../src/img/scientist/photo10.jpg)",
    id: 10
    },
    {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    photo: "url(../src/img/scientist/photo11.jpg)",
    id: 11
    },
    {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    photo: "url(../src/img/scientist/photo12.jpg)",
    id: 12
    }
    ];

    function scientistsPhoto(scientists) {
        return scientists.map((scientist)=>{return `
        <li id=${scientist.id}>
        <img class='scientistImg' src="${scientist.photo}" alt="">
        <p class="scientistName">${scientist.name}</p>
        <p class="scientistSurname">${scientist.surname}</p>
     <p class="scientistBorn">${scientist.born}</p>
    <p class="scientistDead">${scientist.dead}</p>
    
        </li>
        `}).join("")
    }


    function questionList(question) {
        return question.map((questions)=>{return `
        <li id=${questions.id}>
        <p class="questionText">${questions.text}</p>
        </li>
        `}).join("")
    }

    const questionItem = questionList(question)

  const scientistItem = scientistsPhoto(scientists)
  scientistSection.insertAdjacentHTML('beforeend', scientistItem)
  scientistSection.insertAdjacentHTML('beforeend', questionItem)