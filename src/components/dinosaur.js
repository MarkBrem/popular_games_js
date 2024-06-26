
const dinosaurRef = document.getElementById('6');
function createDinosaur() {
        return `
        <section class="section-dinosaur">
    <div class="container dinosaur-container">
        <div class="game">
            <div class="dinosaur"></div>
            <div class="cactus"></div>
        </div>

        <button class="button-start" type="button">Почати гру</button>
    </div>
</section>
        `
}
const dinosaurSection = createDinosaur()
dinosaurRef.insertAdjacentHTML('beforeEnd', dinosaurSection)

const cactusRef = document.querySelector('.cactus');
const btnStartRef = document.querySelector('.button-start')
btnStartRef.addEventListener('click', startGameOnClick);


function startGameOnClick(){
        btnStartRef.style.display = 'none'
        cactusRef.style.animationPlayState = 'running'

        document.addEventListener('keydown', jump);

        function jump() {
                if(dinosaurRef.classList != 'jump'){
                        dinosaurRef.classList.add('jump');
                }
                setTimeout(function(){
                        dinosaurRef.classList.toggle('jump');
                }, 300)
        }
            
}

let isAlive = setInterval(function() {
        let dinosaurTopPos = parseInt(window.getComputedStyle(dinosaurRef).getPropertyValue('top'));
        let cactusLeftPos = parseInt(window.getComputedStyle(cactusRef).getPropertyValue('left'));

        if(cactusLeftPos < 50 && cactusLeftPos > 0 && dinosaurTopPos >= 140){
                alert('Ви програли');
                window.location.reload();
        }
},10)
