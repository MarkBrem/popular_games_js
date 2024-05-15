const dino = document.querySelector('.dino')
const cactus = document.querySelector('.cactus')

document.addEventListener('keydown', jump)

function jump (){

        dino.classList.toggle('jump')
}