const field = document.createElement('div');
const football = document.getElementById('7')

    field.style.position = 'relative';

field.style.marginLeft = 'auto'
field.style.marginRight = 'auto'
field.style.marginBottom = '25px'
    field.style.marginTop = '10px'

    field.style.width = '1000px';

    field.style.height = '300px';

    field.style.border = '3px solid black';

    field.style.backgroundColor = '#5abb58';

    field.style.overflow = 'hidden';

    field.style.cursor = 'pointer';

    field.style.borderRadius = '20px'







    
const ball = document.createElement('img');

    ball.src = 'https://en.js.cx/clipart/ball.svg';
    
    ball.style.position = 'absolute';
    
    ball.style.left = '0';
    
    ball.style.top = '0';
    
    ball.style.width = '60px';
    
    ball.style.height = '60px';
    
    ball.style.transition = 'all 1s';

    field.appendChild(ball);






    field.onclick = function(event) {
      let fieldCoords = this.getBoundingClientRect();

      let ballCoords = {
        top: event.clientY - fieldCoords.top - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - ball.clientWidth / 2
      };


      if (ballCoords.top < 0) ballCoords.top = 0;
      if (ballCoords.left < 0) ballCoords.left = 0;
      if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
      }

      
      if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
      }


      ball.style.left = ballCoords.left + 'px';
      ball.style.top = ballCoords.top + 'px';
};
    
    football.appendChild(field);