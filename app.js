const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
const emoji = document.querySelector('#emoji');
const scoreEmoji = document.querySelector('#scoreEmoji');

let result = 0;
const unit = result == 1 ? 'pt' : 'pts';
let currentTime = timeLeft.textContent;

function move(val){
    if(val == 'easy') return 1500;
    if(val == 'medium') return 1000;
    if(val == 'hard') return 650;
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
    timerId = setInterval(randomSquare, move('easy'));
}

moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime;

    if(currentTime === 50) emoji.innerHTML = '&#128577;';
    if(currentTime === 40) emoji.innerHTML = '&#128580;';
    if(currentTime === 30) emoji.innerHTML = '&#128562;';
    if(currentTime === 20) emoji.innerHTML = '&#128560;';
    if(currentTime === 10) emoji.innerHTML = '&#128561;';
    if(currentTime === 5) emoji.innerHTML = '&#128557;';
    if(result == 5){
        scoreEmoji.innerHTML = '&#128527;'
    }
    if(result == 2){
        scoreEmoji.innerHTML = '&#129319;'
    }
    if(result == 10){
        scoreEmoji.innerHTML = '&#128515;'
    }
    if(result == 15){
        scoreEmoji.innerHTML = '&#128527;'
    }
    if(result >= 25){
        scoreEmoji.innerHTML = '&#128526;'
    }
    if(currentTime === 0 && result > 97){
        clearInterval(timerId);
        alert(`GAME OVER!\nYour final score = ${result} ${unit} 🤣. \nWOW, you actually beat my highscore..😎.\nTake a screenshot of this alert and send it to the developer to claim your prize.`);
    }
    else if(currentTime === 0 && result < 97){
        clearInterval(timerId);
        alert(`GAME OVER!\nYour final score = ${result} ${unit} 🤣. \nBoss Kirigaya remains UNBEATABLE !! 😎.`);
        result = 0;
    }
}

function restart(){
    window.location.reload();
}

let timerId = setInterval(countDown, 1000);
