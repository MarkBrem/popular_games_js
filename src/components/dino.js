const dino = document.querySelector('.dino')
const cactus = document.querySelector('.cactus')

document.addEventListener('keydown', jump)

function jump (){
        dino.classList.add('jump')

        setTimeout(function(){
                dino.classList.remove('jump')
        }, 300)
}