const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
const unit = result === 1 ? 'pt' : 'pts';
let currentTime = timeLeft.textContent;

function move(val){
    if(val == 'easy') return 1500;
    if(val == 'medium') return 1000;
    if(val == 'hard') return 500;
    if(val == 'mas') return 50;
    if(val == '') return 1500;
}

function randomSquare (){
    //remove any initial style if any on the grid
    square.forEach(className => {
        className.classList.remove('mole');
    });

    let randomPosition = square[Math.floor(Math.random() * 12)];
    randomPosition.classList.add('mole');

    //pass random position id to hit position
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        console.log(id);
        if(id.id === hitPosition){
            result = result + 1;
            score.textContent = `${result} ${unit}`;
            score.style.color = '#34bd7c';
        }
    })
})

function moveMole(){
    let timerId = null;
    timerId = setInterval(randomSquare, move('hard'));
}

moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime;

    if(currentTime === 0){
        clearInterval(timerId);
        alert('GAME OVER! Your final score is ' + result + unit);
        result = 0;
    }
}

function restart(){
    window.location.reload();
}

let timerId = setInterval(countDown, 1000);
